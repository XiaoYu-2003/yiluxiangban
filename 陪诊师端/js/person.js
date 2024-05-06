//模块一：显示弹框
// 1.点击切换，弹框显示
document.querySelector('.switch-btn').addEventListener('click',()=>{
  document.querySelector('.switch').style.display = 'block'
  document.querySelector('body').style.backgroundColor = 'rgba(0, 0, 0, 0.1)'
  document.querySelector('header').style.backgroundColor = 'rgb(53,220,200)'
})
// 2.点击取消，弹框隐藏
document.querySelector('.btn-right').addEventListener('click',()=>{
  document.querySelector('.switch').style.display = 'none'
  document.querySelector('header').style.backgroundColor = 'rgb(2,213,200)'
  document.querySelector('body').style.backgroundColor = '#FFFFFF'
})
// 2.点击确定，弹框隐藏
document.querySelector('.btn-cancel').addEventListener('click',()=>{
  document.querySelector('.switch').style.display = 'none'
  document.querySelector('header').style.backgroundColor = 'rgb(2,213,200)'
  document.querySelector('body').style.backgroundColor = '#FFFFFF'
})