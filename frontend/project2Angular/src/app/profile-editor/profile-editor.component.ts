import { Component, SystemJsNgModuleLoader } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileEditorService} from './profile-editor.service';
import { Observable } from 'rxjs';
import { User } from './User';
import { Person } from '../userinfo/person';
import {Router} from '@angular/router';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Component({
	selector: 'app-profile-editor',
	templateUrl: './profile-editor.component.html',
	styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {
	Usersname:String;

  constructor(private ProfileEditorService: ProfileEditorService, private router: Router){}
	updateInfo(formdata){
		let newUser = new User(0,formdata.Username,"USER",formdata.Password, 
		new Person(0,formdata.firstname,formdata.lastname,formdata.Phonenumber,formdata.Email));
		this.ProfileEditorService.checkusername(formdata.firstname)
		.subscribe(username => {this.Usersname = username,this.insertUser(username,newUser)});
		/*
		this.ProfileEditorService.InsertUser(newUser).subscribe();
		this.router.navigate(['./Login']);*/
	}

	insertUser(username:String, user:User){
		console.log(username);
		if(username == null){
			this.ProfileEditorService.InsertUser(user).subscribe();
		}
	}

	
	/*	let Usersname = this.ProfileEditorService.checkusername(formdata.firstname);
		console.log(Usersname);
		if(Usersname == ""){
			this.ProfileEditorService.InsertUser(newUser).subscribe();
		}
	*/	
		//this.router.navigate(['./Login']);
	}
	
		/*
		redirectMethod(User:User,formdata){
		if(formdata.Username != this.logInPerson.username){
			this.router.navigate(['./User']);
		}
		this.router.navigate(['./Signup']);
	}*/