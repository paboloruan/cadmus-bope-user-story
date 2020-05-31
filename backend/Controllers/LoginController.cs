
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    public class LoginController : ControllerBase
    {
        public Login Usuario = new Login
        {
            id = 1,
            userName = "",
            password = "",
            name = "",
            about = "",
            linkedin = "",
            github = "",
            logado = false,
        };

        [HttpGet]
        [Route("Login/{email}/{senha}")]
        public IActionResult Login(string email, string senha)
        {
            if (email == "bope@fullstack.com.br" && senha == "fullstack@2020")
            {
                this.Usuario.userName = email;
                this.Usuario.password = senha;
                this.Usuario.name = "Pablo Castaldelli";
                this.Usuario.about = "ghaH 'Iv mubelmoH loDHom qar \n beatles rolling stones 'ej parmaq \n qo' around reH bom tlhe' \n america Dolmey 'IH";
                this.Usuario.linkedin = "https://www.linkedin.com/in/pablo-castaldelli/";
                this.Usuario.github = "https://github.com/paboloruan";
                this.Usuario.logado = true;
                return Ok(this.Usuario);
            }
            else
            {
                this.Usuario.name = "";
                this.Usuario.about = "";
                this.Usuario.linkedin = "";
                this.Usuario.github = "";
                this.Usuario.logado = false;
                return Ok(this.Usuario);
            }
        }
    }
}
