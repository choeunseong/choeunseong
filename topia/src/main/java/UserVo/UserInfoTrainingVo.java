package UserVo;

import java.util.List;

public class UserInfoTrainingVo {
	private int trainingIdx;			// ±≥¿∞ PK
	private int userIdx;				// µÓ∑œ¿⁄ PK
	private String trainingName;		// ±≥¿∞∏Ì
	private String trainingStartdate;	// ±≥¿∞ Ω√¿€¿œ
	private String trainingEnddate;		// ±≥¿∞ ¡æ∑·¿œ
	private String trainingAgency;		// ±‚∞¸
	
	private List<UserInfoTrainingVo> trainingList;
	
	public int getTrainingIdx() {
		return trainingIdx;
	}
	public void setTrainingIdx(int trainingIdx) {
		this.trainingIdx = trainingIdx;
	}
	public int getUserIdx() {
		return userIdx;
	}
	public void setUserIdx(int userIdx) {
		this.userIdx = userIdx;
	}
	public String getTrainingName() {
		return trainingName;
	}
	public void setTrainingName(String trainingName) {
		this.trainingName = trainingName;
	}
	public String getTrainingStartdate() {
		return trainingStartdate;
	}
	public void setTrainingStartdate(String trainingStartdate) {
		this.trainingStartdate = trainingStartdate;
	}
	public String getTrainingEnddate() {
		return trainingEnddate;
	}
	public void setTrainingEnddate(String trainingEnddate) {
		this.trainingEnddate = trainingEnddate;
	}
	public String getTrainingAgency() {
		return trainingAgency;
	}
	public void setTrainingAgency(String trainingAgency) {
		this.trainingAgency = trainingAgency;
	}
	public List<UserInfoTrainingVo> getTrainingList() {
		return trainingList;
	}
	public void setTrainingList(List<UserInfoTrainingVo> trainingList) {
		this.trainingList = trainingList;
	}
	
}
