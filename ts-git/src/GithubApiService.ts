import * as request from 'request'

class GithubApiService {
  getUserInfo(userName:string){
    request.get("https://api.github.com/users/"+userName,(err:any,response:any,body:any)=>{
      console.log('body',body)
    })
  }
}