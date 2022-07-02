const Auth = {
  checkLogin: (req, res, next) => {
      if(!req.session.logged_in){
          return res.redirect('/login');
      }
      next();
  },
  checkStatus: (req, res, next) => {
      if(!req.session.status == 0){
          return res.redirect('back');
      }
      next();
  }
};

export default Auth;