import { Injectable } from '@angular/core';
import { addDoc, collection, getFirestore, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { User, iUser } from './home/home.model';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  users: User = new User();
  theuserList: iUser[] = [];
  isLoading: boolean = false;

  constructor(private alertCtrl:AlertController, private toastCtrl:ToastController) { }

  async getUsers(): Promise<iUser[]> {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);
    const users: User[] = [];
    const querySnapshot = await getDocs(collection(firestore, 'users'));
    querySnapshot.forEach((doc) => {
      const user = doc.data() as User;
      user.id = doc.id;
      users.push(user);
      // console.log('${doc.id} => ${doc.data()}');
      // console.log(doc.data())
    })
    return users;
  }

  async addData(user: User){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const dataAdd = await addDoc(collection(firestore, "users"), {
      gameName: user.gameName,
      genre: user.genre,
      price: user.price,
      quantity: user.quantity,
      dateRelease: user.dateRelease,
      rating: user.rating,
      isAvailable: user.isAvailable
      });
      console.log("Document written with ID: ", dataAdd.id)
    } catch (e) {
      console.error("Error in adding document: ", e)
    }
  }

  async updateData(user: User){
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const docRef = doc(firestore, "users", user.id);
      await updateDoc(docRef, {gameName: user.gameName,
      genre: user.genre,
      price: user.price,
      quantity: user.quantity,
      dateRelease: user.dateRelease,
      rating: user.rating,
      isAvailable: user.isAvailable})
    } catch (e) {
      console.error("Error in update document: ", e)
    }
  }
  
  async deleteData(user: User) {
    const app = initializeApp(environment.firebaseConfig);
    const firestore = getFirestore(app);

    try {
      const docRef = doc(firestore, "users", user.id);
      await deleteDoc(docRef);
    } catch (e) {
      console.error("Error in delete document: ", e)
    }
  }

  edit(user: iUser) {
    this.users = user;
  }

  async alertdsply(header: string, message: string){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async toastdsply(message: string){
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    })
    await toast.present();
  }
}
