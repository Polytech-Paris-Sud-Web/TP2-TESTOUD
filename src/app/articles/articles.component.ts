import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import {ArticleService} from "../services/article.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles : Article[];
  nbResultsFounded: number = 0;

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.findAll();
  }

  findAll() {
    this.articleService.getArticles().subscribe(articles => {
      this.articles = articles;
      this.nbResultsFounded = this.articles.length;
    });
  }

  delete({id}: Article){
    this.articleService.delete(id).subscribe(()=>{
      this.findAll();
      // If add succeed, alert on the top right hand corner
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'Article succefully deleted'
      })
    });
  }

  newArticle(article: Article){
    this.findAll();
  }

  search(){
    let valueSearch = document.getElementById("searchField")["value"];
    this.articles = this.articles.filter(e => {
      if(e.title.includes(valueSearch)){
        document.getElementById("searchField").style.color = "initial";
        return e;
      } else {
        document.getElementById("searchField").style.color = "red";
      }
    });
    this.nbResultsFounded = this.articles.length;

    if(valueSearch == ""){
      document.getElementById("searchField").style.color = "initial";
      this.findAll();
      this.nbResultsFounded = this.articles.length;
    }
  }

}
