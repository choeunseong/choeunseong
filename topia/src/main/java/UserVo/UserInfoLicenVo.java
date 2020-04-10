package UserVo;

import java.util.List;

public class UserInfoLicenVo {
	private int licenIdx;			// 보유기술 PK
	private int userIdx;			// 등록자 PK
	private String licenName;		// 보유기술명
	private String licenSkillLevel;	// 숙련도(A,B,C)
	
	private List<UserInfoLicenVo> licenList;
	
	public int getLicenIdx() {
		return licenIdx;
	}
	public void setLicenIdx(int licenIdx) {
		this.licenIdx = licenIdx;
	}
	public int getUserIdx() {
		return userIdx;
	}
	public void setUserIdx(int userIdx) {
		this.userIdx = userIdx;
	}
	public String getLicenName() {
		return licenName;
	}
	public void setLicenName(String licenName) {
		this.licenName = licenName;
	}
	public String getLicenSkillLevel() {
		return licenSkillLevel;
	}
	public void setLicenSkillLevel(String licenSkillLevel) {
		this.licenSkillLevel = licenSkillLevel;
	}
	public List<UserInfoLicenVo> getLicenList() {
		return licenList;
	}
	public void setLicenList(List<UserInfoLicenVo> licenList) {
		this.licenList = licenList;
	}
	
}
