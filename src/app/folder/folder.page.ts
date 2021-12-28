import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from 'ionic-angular';
import { AnOtherPage } from '/anOtherPage';


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})

anOtherPage: AnOtherPage;

 constructor(public navCtrl: NavController) {}

goAnOtherPage() {
  this.navCtrl.setRoot(anOtherPage);
}

export class FolderPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
