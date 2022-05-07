import { Injectable } from '@angular/core';

import { Torrent } from '../types/Torrent';
import { User } from '../types/User';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  constructor(private db: AngularFirestore,private storage: AngularFireStorage) { }
  
  downloadFile(url: string,fileType:string) {
    this.storage.ref(url).getDownloadURL().subscribe(dUrl => {
        var xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = (event) => {
        var blob = xhr.response;
      };
      xhr.open('GET', dUrl);
      xhr.send();

      //TUTORIALS: :D
      // https://cloud.google.com/storage/docs/configuring-cors#gsutil_1
      // https://www.alexhadik.com/writing/xhr-file-download/

      xhr.onload = function(e) {
        if (this.status == 200) {
            // Create a new Blob object using the response data of the onload object
            var blob = new Blob([this.response], {type: 'text/plain'});
            //Create a link element, hide it, direct it towards the blob, and then 'click' it programatically
            let a = document.createElement("a");
            document.body.appendChild(a);
            //Create a DOMString representing the blob and point the link element towards it
            let url = window.URL.createObjectURL(blob);  //itt valami objec url-t csinalunk a blobbol? idk
            a.href = url;
            a.download = "download"+"."+fileType;
            //programatically click the link to trigger the download
            a.click();
            //release the reference to the file by revoking the Object URL //ezt se vágom annyira, 
            window.URL.revokeObjectURL(url);
        }else{
            //deal with your error state here
        }
      };
  });
  }


  //CRD (Create, Read, Update, Delete)
  createUser(user:User) {
    this.db.collection('users').doc(user.id).set(user);
  }
  deleteUser(user:User) {
    this.db.collection('users').doc(user.id).delete();
  }
  getUsers(){
    return this.db.collection('users').get()
  }
  
  
  //CRD (Create, Read, Delete)
  createTorrent(torrent:Torrent) {
    this.db.collection('Torrents').add(torrent).then((docRef) => {
      this.db.collection('Torrents').doc(docRef.id).update({id: docRef.id});
    });
  }
  
  deleteTorrent(torrent:Torrent) {
    this.db.collection('Torrents').doc(torrent.id).delete();
  }
  getTorrents(){
    return this.db.collection<Torrent>('Torrents').valueChanges();
  }

  
  
  
}
