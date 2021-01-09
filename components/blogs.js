import Link from 'next/link';

import Title from './title';

function Blogs({ title, items }) {
	return (
		<section className="blogs">
			<div className="container">
				<Title text={title} />
				
				{items ? (
					<div className="row">
						{items.map((item, i) => (
							<div className="col-lg-4" key={i}>
								<div className="blog-item">
									<Link href={`/blogs/${item.slug}`}>
										<a>
											<div className="blog-item-wallpaper">
												<img src={item.image} alt="" />
											</div>
											<div className="blog-item-title">{item.title}</div>
											<div className="blog-item-description">{item.introduction}</div>
										</a>
									</Link>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className="blogs-error">
						<p>There is no blog posts yet.</p>
					</div>
				)}
			</div>
		</section>
	);
}

export default Blogs;
