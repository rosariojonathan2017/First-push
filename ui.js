class UI {
    constructor() {
        this.profile =  document.getElementById('profile');
    }
    showProfile(user) {
    //console.log(user);
    this.profile.innerHTML = `
    
    <div class="card card-body mb-3">
    <div class="row">
        <div class="col-md-3"><img src="${user.avatar_url}" alt="" class="img-fluid mb-2"><a href="${user.html_url}" target ='_blank' class="btn btn-primary">View Profile</a></div>

    <div class="colum-md-9"><span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
    <span class="badge badge-secondary">Public Repos: ${user.public_gists}</span>
    <span class="badge badge-success">Follower: ${user.followers}</span>
    <span class="badge badge-info">Following: ${user.Following}</span>

    <br><br>

    <ul class="list-group">
        <li class="list-group-item">Company:${user.company}</li>
        <li class="list-group-item">Website/Blog:${user.blog}</li>
        <li class="list-group-item">Location:${user.Location}</li>
        <li class="list-group-item">Member Since:${user.created_at}</li>
    </ul>
</div>
</div>
</div>

<h3 class="page-heading mb-3">Latest repost</h3>
<div id="repos"></div>
    
    
    `;
    }
    showRepos(repos){
       let output = '';
       //console.log(repos);

       repos.forEach(repo => {
           output += `
          <div class="card card-body mb-2">
           <div class="row">
               <div class="col md-6">
                   <a href="${repos.html_url}" target="_blank">${repo.name}</a>
               </div>
               <div class="col-md-6">
                   <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                   <span class="badge badge-secondary">Wachers: ${repo.stargazers_count}</span>
                   <span class="badge badge-success">Forks: ${repo.stargazers_count}</span>
               </div>
           </div>
       </div> 
       
       `;

       });
       document.getElementById('repos').innerHTML = output;



    }
    //show alert Message
    showAlert(message, className) {
        this.clearAlert();
        //create div
        const div = document.createElement('div');
        //add class
        div.className = className;
        //add text
        div.appendChild(document.createTextNode(message));
        //Get parent
        const container = document.querySelector('.searchContainer');
        //Get search box
        const search = document.querySelector('.search');
        //Insert alert
        container.insertBefore(div, search);

       //timeOut after 3 sec

       setTimeout(() => {
            this.clearAlert();
       },3000);
     }

     //clear alert
     clearAlert(){
         const currentAlert = document.querySelector('.alert');
         
         if(currentAlert){
             currentAlert.remove();
         }
     }

    //clear profile
    clearProfile(){
        this.profile.innerHTML='';
    }
}