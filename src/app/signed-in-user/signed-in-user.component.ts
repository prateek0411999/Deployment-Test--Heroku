import { Component, OnInit } from '@angular/core';
import{FileUploader} from 'ng2-file-upload';
import {Router} from '@angular/router';
import {RegisterUserService} from '../register-user.service';


import * as firebase from 'firebase';


const uri = 'http://localhost:3001/upload';

@Component({
  selector: 'app-signed-in-user',
  templateUrl: './signed-in-user.component.html',
  styleUrls: ['./signed-in-user.component.css']
})
export class SignedInUserComponent implements OnInit {

  email;
  
  uploader: FileUploader=new FileUploader({url:uri,queueLimit: 5});

  attachmentList:any =[];
 
  constructor(private _route:Router,
    private re: RegisterUserService) { }

    
  ngOnInit(): void {

    this.re.getSigned()
    .subscribe(res=>{
      console.log(res);
      this.email=res;
      console.log(this.email)
    },(err)=> console.log(err));

    this.uploader.onCompleteItem= (item: any,response:any, status: any,headers: any)=>{
      console.log(item);
      
      const file: File= response;
      console.log(file);
      //console.log(response);

      // this.attachmentList.push(JSON.parse(response));
      //   const metaData= {'contentType': file.type};
        //  const storageRef = firebase.storage().ref('attachedImages/'+ file.name);
        // storageRef.put(file);
        // const ref=firebase.storage().ref()
        // const name= new Date()+ '-' + file.name
        // const metadata={
        //   contentType: response.type
        // }
        // const task=ref.child(name).put(response,metadata)

        // task
        // .then(snapshot => snapshot.ref.getDownloadURL())
        // .then(url => {
        //   console.log(url)
        //   console.log("image uploaded successfully")
        // })

      
      }

    }
  }


