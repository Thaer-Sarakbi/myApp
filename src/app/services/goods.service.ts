import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs: AngularFirestore) { }

  getAllGoods(){ 
    //return this.fs.collection('goods').valueChanges()
    return this.fs.collection('goods').snapshotChanges()  //path: goods
  }
}
