import React from 'react'

export const LoginScreen = () => {
    return (
        <div class="auth__loign wrapper fadeInDown zero-raduis">
            <div id="formContent">

                <div class="fadeIn first">
                    <h2 class="my-5">Iniciar Sesión</h2>
                </div>

                <form>
                    <input type="email" id="email" class="fadeIn second zero-raduis" name="email" placeholder="id" />
                    <input type="text" id="password" class="fadeIn third zero-raduis" name="login" placeholder="contrseña" />
                    <input type="submit" class="fadeIn fourth zero-raduis" value="Iniciar Sesión" />
                    <h2>No tienes una cuenta ?</h2>
                    <input type="button" class="fadeIn fourth zero-raduis pc" value="registrarse"/>
                </form>


            </div>
        </div>
    )
}
