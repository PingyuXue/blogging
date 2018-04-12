// this file will contain the React UI components

var Router = window.ReactRouter.Router;
var Route = window.ReactRouter.Route;
var hashHistory = window.ReactRouter.hashHistory;
var Link = window.ReactRouter.Link;


class Signin extends React.Component{
    // Sigin componet will display the UI for our Signin

    constructor(props){
        super ( props);

        // 如果没有this 对与 state的赋值， 会报 state null 的错误
        this.singIn = this.singIn.bind(this);

        // bind
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        // 不懂， this.state的用法
        this.state = {
            email : '',
            passowrd : ''
        };
    }


    // 要在 click button 的时候，同时链接到  node server 上
    singIn(){
        //   check input 有效
        // alert( 'Email address is '+  this.state.email + 'password is ' + this.state.passowrd);


        // axios  的用法和定义， 不懂！

        //  code request /signin， request 成功的话， 会走向 then;  如果不成功，走向catch ， 会报错；
        //  会报错， 报错类型： net:: ERR_EMPTY_RESPONSE
        axios.post('/signin',{
            email : this.state.email,
            passowrd : this.state.passowrd
        })
        .then( function (response){
            console.log(response);
        })
        .catch( function( error){
            console.log( error);
        });
    }

    // parse the request:

    handleEmailChange ( e){
        this.setState( {email: e.target.value})
    }

    handlePasswordChange ( e){
        this.setState ( {password: e.target.value})
    }

    // 不能在click 中 弹出 输入的信息
    // onChange 事件的处理
    
    render(){
        return (
            <div>
            <form className = "form-signin">
                <h2 className = "form-sigin-heading"> Please sign in </h2>

                {  /*  placeholder 是在文本提示框 input 中的预先提示信息，会在输入内容时消失    */}   
                <label for = "inputEmail" className= "sr-only" >  Email address </label>
                <input type = "email" 
                        onChange = {this.handleEmailChange} 
                        id = "inputEmail" 
                        className ="form-control" 
                        placeholder = "Email address" 
                        required autofocus/>
                
                <label for = "inputPassword" className = "sr-only" > password </label>
                <input type = "password" 
                        onChange = {this.handlePasswordChange} 
                        d = "inputPassword" 
                        className = "form-control" 
                        placeholder = "Password" 
                        required />

                <button className = "btn btn-lg btn-primary btn-block"  
                        onClick = {this.singIn}  
                        type = "button" > Sign in please </button>
            </form>

            <div>
                <Link to ='/signup'> {'Signup'}</Link>
            </div>
            </div>

        )
    }
}



// create the user registeration view:
 class Signup extends React.Component{

    handleNameChange ( e){
        this.setState( {name: e.target.value});
    }

    handleEmailChange(e){
        this.setState( {email: e.target.value});
    }
    handlePasswordChange (e){
        this.setState({ passowrd: e.target.value})
    }

    // 1. constructor 里， 为什么用 props 这个变量
    // super（ props) 的使用： check super的用法
    constructor(props){

        super(props);

        // ！！！！ 每次都会忘记的 state 方法， bind上方法S
        this.signUp = this.signUp.bind(this);
    
        // bind 上所有之前 handle 的值
        this.handleNameChange = this.handleEmailChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        // 这个state的意义是啥？
        this.state= {
            name: '',
            email: '',
            passowrd : ''
        };
    }

    signUp (){
        axios.post('/signup',{
            name: this.state.name,
            email: this.state.email,
            passowrd: this.state.email
        })
        .then( function (response){
            console.log(response);
        })
        .catch(function (error){
            console.log(error);
        });
    }


    render(){
        return (
            <div>
                <form className = "form-signin"> 
                <h2 className = 'form-signin'> Please sign up </h2>
                <label for = 'inputName' className = 'sr-only'> Name </label>
                <input type = 'name ' 
                        onChange ={this.handleNameChange}
                        id = 'inputName' 
                        className = 'form-control' 
                        placeholder = 'Name' 
                        required autofocus/> 

                <label  for = 'inputEmail' 
                        className = 'sr-only'> Email address </label>
                <input type = 'email'
                        onChange = {this. handleEmailChange}
                        id = 'inputEmail'
                        //  form-control 可以让格式比较居中，写错了就变成  
                        className = 'form-control'
                        placeholder = 'Email'
                        required />
                
                <label for ='inputPassword' className = 'sr-only'> Password</label>
                <input type = 'password'
                        onChange = { this.handlePasswordChange}
                        id  = 'inputPassword'
                        className = "form-control" 
                        placeholder = 'password'
                        required/>


                <button className = 'btn btn-lg btn-primary btn-block' onClick = {this.signUp} 
                        type = "button"> Sign up </button>
                
                </form>

{/*  问题！！！！！！！！！！！！！！， Link  的格式 */}
{/* //  这个 div的 link 没有get到。 有点乱， link 到哪里啊？ */}
                <div>
                    <Link to ="/"> {"Signin"}</Link>
                </div>
            </div>
        )
    }
 } 

// ReactDOM.render( <
//     Signin / > ,
//     document.getElementById('app')
// );
//

ReactDOM.render(
    // </rounter>  后面的 ‘,' 为什么？
    // path 的输入 path= ‘/‘ 的含义
    <Router history = {hashHistory}>
        <Route component = {Signin} path = '/'> </Route>
        {/* 大小写很敏感，之前写成了 Comonent */}
        <Route component = {Signup} path = '/signup'> </Route>
    </Router>,
    document.getElementById('app')
);