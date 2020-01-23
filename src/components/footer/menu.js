import React from 'react'
import Link from 'gatsby-link'
export default class Menu extends React.Component {
	render() {
		const { menu } = this.props
		return (
			<div>
				<ul
					style={{
						padding: '0px',
						margin: '0px',
					}}
				>
					{menu.map((item, index) => (
						<li
							key={index}
							style={{
								listStyle: 'none',
								display: 'inline-block',
								margin: '0px',
							}}
						>
							<Link
								to={item.link}
								style={{
									padding: '8px 16px 8px 0px',
									display: 'inline-block',
									color: 'white',
									listStyle: 'none',
									textDecoration: 'none',
								}}
							>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		)
	}
}
