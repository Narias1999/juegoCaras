let arrEl = []
function aleatorio() {
	let num
	let x = true
	while(x){
		num = Math.floor(Math.random() * 12) + 1
		if (validar(num)) {
			x = false
		}
	}
	arrEl.push(num)
	return num
}
function validar(num){
	let s = true
	arrEl.forEach(function(el){
		if(el == num) s = false
	})
	return s
}
for (var i = 0; i < 6; i++) {
	let n1 = aleatorio()
	let n2 = aleatorio()
	$(`#card${n1}`).data('value',i)
	$(`#card${n2}`).data('value',i)
	if (!i) {
		$(`#card${n1}`).find('.back').css({
			'background-image': 'url(img/mago.png)'
		})
		$(`#card${n2}`).find('.back').css({
			'background-image': 'url(img/mago.png)'
		})
	}else if (i == 1) {
		$(`#card${n1}`).find('.back').css({
			'background-image': 'url(img/dark.png)'
		})
		$(`#card${n2}`).find('.back').css({
			'background-image': 'url(img/dark.png)'
		})
	}else if (i == 2) {
		$(`#card${n1}`).find('.back').css({
			'background-image': 'url(img/chaos.jpg)'
		})
		$(`#card${n2}`).find('.back').css({
			'background-image': 'url(img/chaos.jpg)'
		})
	}else if (i == 3) {
		$(`#card${n1}`).find('.back').css({
			'background-image': 'url(img/maga.png)'
		})
		$(`#card${n2}`).find('.back').css({
			'background-image': 'url(img/maga.png)'
		})
	}else if (i == 4) {
		$(`#card${n1}`).find('.back').css({
			'background-image': 'url(img/despojo.png)'
		})
		$(`#card${n2}`).find('.back').css({
			'background-image': 'url(img/despojo.png)'
		})
	}else{
		$(`#card${n1}`).find('.back').css({
			'background-image': 'url(img/elemental.png)'
		})
		$(`#card${n2}`).find('.back').css({
			'background-image': 'url(img/elemental.png)'
		})
	}
}
let control = setInterval(cronometro,1000)
let isSelect = false
let selected = null
let jugadas = 0, minutos = 0, segundos=0, suced = 0
$('.card').click(function(){
	if (!$(this).data('out')) {
		if (!isSelect) {
			$(this).find('.crt').addClass('active')
			selected = $(this)
			isSelect = true
		}else{
			if ($(this)[0] != selected[0]) {
				jugadas++
				$('#moves').html(jugadas)
				$('#j').html(jugadas)
				$(this).find('.crt').addClass('active')
				let st = selected
				if ($(this).data('value') == st.data('value')) suced++
				if (suced ==6) {
					clearInterval(control)
					setTimeout(function(){
						$('.game').css('transform','scale(0)')
					},1200)
					setTimeout(function(){
						$('.end').css('transform','scale(1)')
					},1600)
				}
				setTimeout(function(){
					if ($(this).data('value') == st.data('value')) {
						$(this).css('opacity','0')
						st.css('opacity','0')
						st.data('out', true)
						$(this).data('out', true)
					}else{
						$(this).find('.crt').removeClass('active')
						st.find('.crt').removeClass('active')
					}
				}.bind(this),1000)
				selected = null
				isSelect = false
			}
		}
	}
})
function cronometro(){
	segundos++
	if (segundos == 60) {
		segundos = 0
		minutos++
	}
	let txtS = segundos<10 ? `0${segundos}` : segundos
	let txtM = minutos<10 ? `0${minutos}` : minutos

	$('#time').html(`${txtM}:${txtS}`)
	$('#t').html(`${txtM}:${txtS}`)
}