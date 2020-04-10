package UserVo;

public class UserInfoVo {
	private int userIdx; 				// user_info PK(등록번호)
	private String userRegisterDate; 	// 등록일자
	private String userName; 			// 등록자명
	private String userSocialSecunum; 	// 등록자 주민번호
	private String userSex; 			// 성별
	private String userComp; 			// 회사명
	private String userCompEnterdate; 	// 회사입사일
	private String userDept; 			// 부서
	private String userSpot; 			// 직위
	private String userArmyServ; 		// 병역
	private String userMaritalStatus; 	// 결혼여부
	private String userArmyServEnter; 	// 입대일(병역)
	private String userArmyServLeave; 	// 제대일(병역)
	private String userArmyServPeriod; 	// 역종/병과
	private String userTelnumWired; 	// 전화번호
	private String userTelnumWireless; 	// 휴대폰번호
	private String userEmail; 			// 이메일
	private String userZipcode; 		// 우편번호
	private String userAddress; 		// 주소
	
	private String careerDate;			// 경력
	private int careerCount;			// 경력별 인원수
	
//	------------------불러오기 검색조건--------------------
	private String userListSearchPeriod;	// 검색조건(이름/회사/부서)
	private String userListSearchWord;		// 검색어
	private String userCareerLength;		// 경력사항(1,2,3,...10년 이상)
	private int userInfoDataSize;		// 리스트 보여질 갯수(10, 20개)
	private String userGender;			// 성별선택(남/여)
	private String saveStartDate;		// 이력카드 저장시작일자
	private String saveEndDate;			// 이력카드 저장 끝일자
	private String searchKeyword;		// 개발환경 키워드
	
//	-----------------page-----------------------
	private int startIndex;
	private int endIndex;
	private int pageNo;
	
	
	public int getUserIdx() {
		return userIdx;
	}
	public void setUserIdx(int userIdx) {
		this.userIdx = userIdx;
	}
	public String getUserRegisterDate() {
		return userRegisterDate;
	}
	public void setUserRegisterDate(String userRegisterDate) {
		this.userRegisterDate = userRegisterDate;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserSocialSecunum() {
		return userSocialSecunum;
	}
	public void setUserSocialSecunum(String userSocialSecunum) {
		this.userSocialSecunum = userSocialSecunum;
	}
	public String getUserSex() {
		return userSex;
	}
	public void setUserSex(String userSex) {
		this.userSex = userSex;
	}
	public String getUserComp() {
		return userComp;
	}
	public void setUserComp(String userComp) {
		this.userComp = userComp;
	}
	public String getUserCompEnterdate() {
		return userCompEnterdate;
	}
	public void setUserCompEnterdate(String userCompEnterdate) {
		this.userCompEnterdate = userCompEnterdate;
	}
	public String getUserDept() {
		return userDept;
	}
	public void setUserDept(String userDept) {
		this.userDept = userDept;
	}
	public String getUserSpot() {
		return userSpot;
	}
	public void setUserSpot(String userSpot) {
		this.userSpot = userSpot;
	}
	public String getUserArmyServ() {
		return userArmyServ;
	}
	public void setUserArmyServ(String userArmyServ) {
		this.userArmyServ = userArmyServ;
	}
	public String getUserMaritalStatus() {
		return userMaritalStatus;
	}
	public void setUserMaritalStatus(String userMaritalStatus) {
		this.userMaritalStatus = userMaritalStatus;
	}
	public String getUserArmyServEnter() {
		return userArmyServEnter;
	}
	public void setUserArmyServEnter(String userArmyServEnter) {
		this.userArmyServEnter = userArmyServEnter;
	}
	public String getUserArmyServLeave() {
		return userArmyServLeave;
	}
	public void setUserArmyServLeave(String userArmyServLeave) {
		this.userArmyServLeave = userArmyServLeave;
	}
	public String getUserArmyServPeriod() {
		return userArmyServPeriod;
	}
	public void setUserArmyServPeriod(String userArmyServPeriod) {
		this.userArmyServPeriod = userArmyServPeriod;
	}
	public String getUserTelnumWired() {
		return userTelnumWired;
	}
	public void setUserTelnumWired(String userTelnumWired) {
		this.userTelnumWired = userTelnumWired;
	}
	public String getUserTelnumWireless() {
		return userTelnumWireless;
	}
	public void setUserTelnumWireless(String userTelnumWireless) {
		this.userTelnumWireless = userTelnumWireless;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getUserZipcode() {
		return userZipcode;
	}
	public void setUserZipcode(String userZipcode) {
		this.userZipcode = userZipcode;
	}
	public String getUserAddress() {
		return userAddress;
	}
	public void setUserAddress(String userAddress) {
		this.userAddress = userAddress;
	}
	public String getUserListSearchPeriod() {
		return userListSearchPeriod;
	}
	public void setUserListSearchPeriod(String userListSearchPeriod) {
		this.userListSearchPeriod = userListSearchPeriod;
	}
	public String getUserListSearchWord() {
		return userListSearchWord;
	}
	public void setUserListSearchWord(String userListSearchWord) {
		this.userListSearchWord = userListSearchWord;
	}
	public String getUserCareerLength() {
		return userCareerLength;
	}
	public void setUserCareerLength(String userCareerLength) {
		this.userCareerLength = userCareerLength;
	}
	public int getUserInfoDataSize() {
		return userInfoDataSize;
	}
	public void setUserInfoDataSize(int userInfoDataSize) {
		this.userInfoDataSize = userInfoDataSize;
	}
	public String getUserGender() {
		return userGender;
	}
	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}
	public String getCareerDate() {
		return careerDate;
	}
	public void setCareerDate(String careerDate) {
		this.careerDate = careerDate;
	}
	public int getStartIndex() {
		return startIndex;
	}
	public void setStartIndex(int startIndex) {
		this.startIndex = startIndex;
	}
	public int getEndIndex() {
		return endIndex;
	}
	public void setEndIndex(int endIndex) {
		this.endIndex = endIndex;
	}
	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
	public int getCareerCount() {
		return careerCount;
	}
	public void setCareerCount(int careerCount) {
		this.careerCount = careerCount;
	}
	public String getSaveStartDate() {
		return saveStartDate;
	}
	public void setSaveStartDate(String saveStartDate) {
		this.saveStartDate = saveStartDate;
	}
	public String getSaveEndDate() {
		return saveEndDate;
	}
	public void setSaveEndDate(String saveEndDate) {
		this.saveEndDate = saveEndDate;
	}
	public String getSearchKeyword() {
		return searchKeyword;
	}
	public void setSearchKeyword(String searchKeyword) {
		this.searchKeyword = searchKeyword;
	}
	
	
}
