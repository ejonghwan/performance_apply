import React, { useEffect, useRef } from 'react'

function Card(props) {

	const imgRef = useRef(null)

	useEffect(() => {
		const callback = (entries, observer) => {
			// console.log('callback')
			// entries => observer한 객체들이 배열로 넘어옴
			entries.forEach(item => {
				if(item.isIntersecting) {
					// console.log('intersecting')
					console.log(item.target.dataset);
					item.target.src = item.target.dataset.src;
					item.target.previousSibling.srcSet = item.target.previousSibling.dataset.srcSet;
					observer.unobserve(item.target) // 한번 넣어줬으면 더 이상 감시할 필요없다고 알려줌
				}
			})
			// console.log(entries) 
		}
		const options = {}
	
		const observer = new IntersectionObserver(callback, options);

		// console.log(imgRef.current)
		observer.observe(imgRef.current);
	}, [])


	return (
		<div className="Card text-center">
			<picture>
				<source data-srcset={props.webp} type="image/webp" />
				<img /*src={props.image}*/  data-src={props.image} ref={imgRef}/>
			</picture>
			<div className="p-5 font-semibold text-gray-700 text-xl md:text-lg lg:text-xl keep-all">
				{props.children}
			</div>
		</div>
	)
}

export default Card
