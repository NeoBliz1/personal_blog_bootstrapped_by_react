import '../css/App.css';
import Router from './routes'

//app wrap
const BlogApp = () => {  
  return (
    <div id='childRoot'>      
      <Router />
    </div>       
  )  
}

export default BlogApp;
