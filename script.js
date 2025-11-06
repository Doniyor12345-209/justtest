let name = prompt('Введите ваше имя')
let age = Number(prompt('Введите ваш возраст'))
if (age < 18) {
    alert('Ваш возраст не подходит!')
}else if (age >= 18 && age > 18) {
    alert('Ваш возраст подходит для регистрации!')

}else{
    let account = prompt('Введите ваш аккаунт')
if (account.includes('@')) {
    alert('Аккаунт успешно добавлен!')
}else{
    alert('Повторите снова!')
}
let password = prompt('Введите пороль от вашего аккаунта')
if (password.length < 6 || password.length > 12) {
    alert('Пороль должен содержать от 6 до 12 символов!')
}else{
    alert('Пороль успешно введен!')
}

}





