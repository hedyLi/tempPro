module.exports = function(param) {
    let userName=param.body.userName;
    let passWord=param.body.pwd;
    if(userName=='admin' && passWord=='0000'){
        return {
            msg:'success'
        }
    }else{
        return {
            msg:'error',param:param
        }
    }
}