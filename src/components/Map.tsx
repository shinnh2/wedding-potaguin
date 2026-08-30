function Map() {
	return (
		<section>
			<div className="title-wrap">
				<div className="title-deco">
					<img src="./line-deco-03.png" alt="" />
				</div>
				<h3 className="title">MAP</h3>
				<p className="title-desc">오시는 길</p>
			</div>
			<div className="map-img-wrap">
				<img src="./map.png" alt="명성교회 오는 길 지도" />
			</div>
			<div className="map-link-wrap">
				<a href="" target="_blank" className="map-link">
					카카오맵
				</a>
				<a href="" target="_blank" className="map-link">
					네이버 지도
				</a>
			</div>
			<div className="map-info">
				<dl className="map-info-item">
					<dt>주소</dt>
					<dd>
						서울 강동구 구천면로 452 명성교회
						<br />
						샬롬관 지하1층 샬롬아트홀
						<br />
						(지번: 서울 강동구 명일동 331-1)
					</dd>
				</dl>
				<dl className="map-info-item">
					<dt>지하철</dt>
					<dd>5호선 명일역 4번 출구 도보5분</dd>
					<dd>5호선 굽은다리역 3번 출구 도보 5분</dd>
				</dl>
				<dl className="map-info-item">
					<dt>버스</dt>
					<dd>- 시외: 13, 13-2, 15-3, 16, 30, 30-1 명일여고 하차</dd>
					<dd>- 지선, 간선: 3411, 3413, 3318 명일여고 하차</dd>
				</dl>
				<dl className="map-info-item">
					<dt>승용차</dt>
					<dd>
						- 천호대교 → 길동사거리에서 좌회전 → 명일역 앞 사거리에서 우회전 →
						400M직진 명성교회
					</dd>
					<dd>
						- 구리암사대교 → 롯데캐슬퍼스트아파트 → 명일역 앞 사거리에서 좌회전
						→ 400M직진 명성교회
					</dd>
				</dl>
			</div>
		</section>
	);
}

export default Map;
