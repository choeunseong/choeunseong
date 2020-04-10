package UserVo;

import java.util.List;

public class UserInfoQualifiVo {
	private int qualifiIdx;			// 자격증 PK
	private int userIdx;			// 등록자 PK
	private String qualifiName;		// 자격증명
	private String qualifiGetdate;	// 취득일
	
	private List<UserInfoQualifiVo> qualifiList;
	
	public int getQualifiIdx() {
		return qualifiIdx;
	}
	public void setQualifiIdx(int qualifiIdx) {
		this.qualifiIdx = qualifiIdx;
	}
	public int getUserIdx() {
		return userIdx;
	}
	public void setUserIdx(int userIdx) {
		this.userIdx = userIdx;
	}
	public String getQualifiName() {
		return qualifiName;
	}
	public void setQualifiName(String qualifiName) {
		this.qualifiName = qualifiName;
	}
	public String getQualifiGetdate() {
		return qualifiGetdate;
	}
	public void setQualifiGetdate(String qualifiGetdate) {
		this.qualifiGetdate = qualifiGetdate;
	}
	public List<UserInfoQualifiVo> getQualifiList() {
		return qualifiList;
	}
	public void setQualifiList(List<UserInfoQualifiVo> qualifiList) {
		this.qualifiList = qualifiList;
	}
	
}
