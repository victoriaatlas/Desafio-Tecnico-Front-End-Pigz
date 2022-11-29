import React from 'react';

function RegistrationForm() {
    return (
        <div className='form-body'>
            <h1>Quero vender no Pigz</h1>
            <spam>Dê o primeiro passo para aumentar suas vendas</spam>
            <form>
                <span>Nome</span>
                <label htmlFor="name">
                    <input
                        type="text"
                        id="name"
                        data-testid="common_register__input-name"
                        name="name"
                        placeholder="Leonercio Goesfeeld"
                    />
                </label>
                <span>Email</span>
                <label htmlFor="email">
                    <input
                        type="text"
                        id="email"
                        data-testid="common_register__input-email"
                        name="email"
                        placeholder="leonercio.goesfeeld@exemple.com"
                    />
                </label>
                <span>Telefone</span>
                <label htmlFor="name-phone">
                    <input
                        type="tel"
                        id="phone"
                        data-testid="common_register__input-number"
                        name="number-phone"
                    />
                </label>
                <spam>
                    Ao continuar, aceito que a Pigz entre em contato comigo por telefone,e-mail ou WhatsApp.
                </spam>
                <button
                    type="button">
                    Continuar
                </button>
            </form>
        </div>
    )
}

export default RegistrationForm