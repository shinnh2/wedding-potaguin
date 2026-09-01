import AccordionItem from "./AccordionItem";
import ButtonCopy from "./ButtonCopy";

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
			<AccordionItem side="신랑측">
				<div className="content-item">
					<div className="content-info">
						<p className="name">송인규</p>
						<p className="bank">
							<span>신한은행</span>
							<span>110-444-419326</span>
						</p>
					</div>
					<ButtonCopy copyText="신한은행 110-444-419326"/>
				</div>
			</AccordionItem>
			{/* 신부측 */}
			<AccordionItem side="신부측">
				<div className="content-item">
					<div className="content-info">
						<p className="name">신성호</p>
						<p className="bank">
							<span>국민은행</span>
							<span>653625-01-038302</span>
						</p>
					</div>
					<ButtonCopy copyText="국민은행 653625-01-038302"/>
				</div>
				<div className="content-item">
					<div className="content-info">
						<p className="name">신나현</p>
						<p className="bank">
							<span>카카오뱅크</span>
							<span>3333-08-1951892</span>
						</p>
					</div>
					<ButtonCopy copyText="카카오뱅크 3333-08-1951892"/>
				</div>
			</AccordionItem>			
		</section>
	);
}

export default Blessing;
