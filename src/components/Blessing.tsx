function Blessing() {
	return (
		<section>
			<div className="title-wrap">
				<div className="title-deco">
					<img src="./line-deco-04.png" alt="" />
				</div>
				<h3 className="title">BLESSING</h3>
				<p className="title-desc">마음 전하실 곳</p>
			</div>
			{/* 신랑측 */}
			<div className="accorion-item">
				<div className="accorion-item-title">
					<span className="em">신랑측</span>
					<span>마음 전하실 곳</span>
					<button>펼치기</button>
				</div>
				<div className="accorion-item-content">
					<div className="content-item">
						<div className="content-info">
							<p className="name">송인규</p>
							<p className="bank">
								<span>신한은행</span>
								<span>110-444-419326</span>
							</p>
						</div>
						<button className="button-copy">복사</button>
					</div>
				</div>
			</div>
			{/* 신부측 */}
			<div className="accorion-item">
				<div className="accorion-item-title">
					<span className="em">신부측</span>
					<span>마음 전하실 곳</span>
					<button>펼치기</button>
				</div>
				<div className="accorion-item-content">
					<div className="content-item">
						<div className="content-info">
							<p className="name">신성호</p>
							<p className="bank">
								<span>국민은행</span>
								<span>111-222-333333</span>
							</p>
						</div>
						<button className="button-copy">복사</button>
					</div>
					<div className="content-item">
						<div className="content-info">
							<p className="name">신나현</p>
							<p className="bank">
								<span>카카오뱅크</span>
								<span>3333-08-1951892</span>
							</p>
						</div>
						<button className="button-copy">복사</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Blessing;
