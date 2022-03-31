import { DataService } from './../../services/data/data.service';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-config',
  templateUrl: './order-config.page.html',
  styleUrls: ['./order-config.page.scss'],
})
export class OrderConfigPage implements OnInit {
  form: FormGroup;
  todo;

  constructor(private fb: FormBuilder,
    private navCtrl: NavController,
    private dataService: DataService
    ) {
    this.createForm();
  }


  ngOnInit() {
    this.todo = this.dataService.getParams().todo;
    this.patchForm();
  }

  patchForm() {
    if(this.todo) {
      this.form.patchValue({
        title: this.todo.title,
        desc: this.todo.desc
      });
    }
  }

  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.navCtrl.pop();
  }

}
