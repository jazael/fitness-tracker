import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { subscribeOn } from 'rxjs/operator/subscribeOn';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  exercises: Observable<any>;

  constructor(private trainingService: TrainingService, private db: AngularFirestore) { }

  ngOnInit() {
    this.db
      .collection('availableExercises')
      .snapshotChanges()
      .subscribe(result => console.log(result));
  }

  onStartTraining(form: NgForm) {
    console.log(form);
    this.trainingService.startExercise(form.value.exercise);
  }

}
