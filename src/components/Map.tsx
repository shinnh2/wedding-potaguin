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
				<a href="https://place.map.kakao.com/64221065" target="_blank" className="map-link">
					카카오맵
				</a>
				<a href="https://naver.me/xjg8ZBlr" target="_blank" className="map-link">
					네이버 지도
				</a>
			</div>
			<div className="map-info">
				<dl className="map-info-item">
					<dt className="map-info-item-title">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M536.5-503.5Q560-527 560-560t-23.5-56.5Q513-640 480-640t-56.5 23.5Q400-593 400-560t23.5 56.5Q447-480 480-480t56.5-23.5ZM480-186q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
						<span>주소</span>
					</dt>
					<dd>
						서울 강동구 구천면로 452 명성교회
						<br />
						샬롬관 지하1층 샬롬아트홀
						<br />
						(지번: 서울 강동구 명일동 331-1)
					</dd>
				</dl>
				<dl className="map-info-item">
					<dt className="map-info-item-title">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-120v-40l60-40q-59 0-99.5-40.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 59-40.5 99.5T660-200l60 40v40H240Zm0-440h200v-120H240v120Zm420 80H240h480-60Zm-140-80h200v-120H520v120ZM382.5-337.5Q400-355 400-380t-17.5-42.5Q365-440 340-440t-42.5 17.5Q280-405 280-380t17.5 42.5Q315-320 340-320t42.5-17.5Zm280 0Q680-355 680-380t-17.5-42.5Q645-440 620-440t-42.5 17.5Q560-405 560-380t17.5 42.5Q595-320 620-320t42.5-17.5ZM300-280h360q26 0 43-17t17-43v-140H240v140q0 26 17 43t43 17Zm180-520q-86 0-142.5 10T258-760h448q-18-20-74.5-30T480-800Zm0 40h226-448 222Z"/></svg>
						<span>지하철</span>
					</dt>					
					<dd>- 5호선 명일역 4번 출구 도보5분</dd>
					<dd>- 5호선 굽은다리역 3번 출구 도보 5분</dd>
				</dl>
				<dl className="map-info-item">
					<dt className="map-info-item-title">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-120q-17 0-28.5-11.5T200-160v-82q-18-20-29-44.5T160-340v-380q0-83 77-121.5T480-880q172 0 246 37t74 123v380q0 29-11 53.5T760-242v82q0 17-11.5 28.5T720-120h-40q-17 0-28.5-11.5T640-160v-40H320v40q0 17-11.5 28.5T280-120h-40Zm242-640h224-448 224Zm158 280H240h480-80Zm-400-80h480v-120H240v120Zm142.5 222.5Q400-355 400-380t-17.5-42.5Q365-440 340-440t-42.5 17.5Q280-405 280-380t17.5 42.5Q315-320 340-320t42.5-17.5Zm280 0Q680-355 680-380t-17.5-42.5Q645-440 620-440t-42.5 17.5Q560-405 560-380t17.5 42.5Q595-320 620-320t42.5-17.5ZM258-760h448q-15-17-64.5-28.5T482-800q-107 0-156.5 12.5T258-760Zm62 480h320q33 0 56.5-23.5T720-360v-120H240v120q0 33 23.5 56.5T320-280Z"/></svg>
						<span>버스</span>
					</dt>					
					<dd>- 시외: 13, 13-2, 15-3, 16, 30, 30-1 명일여고 하차</dd>
					<dd>- 지선, 간선: 3411, 3413, 3318 명일여고 하차</dd>
				</dl>
				<dl className="map-info-item">
					<dt className="map-info-item-title">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor"><path d="M240-200v40q0 17-11.5 28.5T200-120h-40q-17 0-28.5-11.5T120-160v-320l84-240q6-18 21.5-29t34.5-11h440q19 0 34.5 11t21.5 29l84 240v320q0 17-11.5 28.5T800-120h-40q-17 0-28.5-11.5T720-160v-40H240Zm-8-360h496l-42-120H274l-42 120Zm-32 80v200-200Zm100 160q25 0 42.5-17.5T360-380q0-25-17.5-42.5T300-440q-25 0-42.5 17.5T240-380q0 25 17.5 42.5T300-320Zm360 0q25 0 42.5-17.5T720-380q0-25-17.5-42.5T660-440q-25 0-42.5 17.5T600-380q0 25 17.5 42.5T660-320Zm-460 40h560v-200H200v200Z"/></svg>
						<span>승용차</span>
					</dt>					
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
