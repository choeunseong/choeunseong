package UserVo;

import java.util.List;

public class UserInfoSkillVo {
	private int skillIdx;				// 프로젝트 PK
	private int userIdx;				// 등록자 PK
	private String skillProjectName;	// 프로젝트명, 업무명
	private String skillStartdate;		// 시작일
	private String skillEnddate;		// 종료일
	private String skillCustomerComp;	// 고객사
	private String skillWorkComp;		// 근무회사
	private String skillApplied;		// 개발분야(응용)
	private String skillIndustry;		// 개발분야(산업)
	private String skillRole;			// 역할
	private String skillModel;			// 기종
	private String skillOs;				// O.S
	private String skillLang;			// 언어
	private String skillDbms;			// DBMS
	private String skillComm;			// 통신
	private String skillTool;			// 툴
	private String skillEtc;			// 기타
	
	private List<UserInfoSkillVo> skillList;
	
	public int getSkillIdx() {
		return skillIdx;
	}
	public void setSkillIdx(int skillIdx) {
		this.skillIdx = skillIdx;
	}
	public int getUserIdx() {
		return userIdx;
	}
	public void setUserIdx(int userIdx) {
		this.userIdx = userIdx;
	}
	public String getSkillProjectName() {
		return skillProjectName;
	}
	public void setSkillProjectName(String skillProjectName) {
		this.skillProjectName = skillProjectName;
	}
	public String getSkillStartdate() {
		return skillStartdate;
	}
	public void setSkillStartdate(String skillStartdate) {
		this.skillStartdate = skillStartdate;
	}
	public String getSkillEnddate() {
		return skillEnddate;
	}
	public void setSkillEnddate(String skillEnddate) {
		this.skillEnddate = skillEnddate;
	}
	public String getSkillCustomerComp() {
		return skillCustomerComp;
	}
	public void setSkillCustomerComp(String skillCustomerComp) {
		this.skillCustomerComp = skillCustomerComp;
	}
	public String getSkillWorkComp() {
		return skillWorkComp;
	}
	public void setSkillWorkComp(String skillWorkComp) {
		this.skillWorkComp = skillWorkComp;
	}
	public String getSkillApplied() {
		return skillApplied;
	}
	public void setSkillApplied(String skillApplied) {
		this.skillApplied = skillApplied;
	}
	public String getSkillIndustry() {
		return skillIndustry;
	}
	public void setSkillIndustry(String skillIndustry) {
		this.skillIndustry = skillIndustry;
	}
	public String getSkillRole() {
		return skillRole;
	}
	public void setSkillRole(String skillRole) {
		this.skillRole = skillRole;
	}
	public String getSkillModel() {
		return skillModel;
	}
	public void setSkillModel(String skillModel) {
		this.skillModel = skillModel;
	}
	public String getSkillOs() {
		return skillOs;
	}
	public void setSkillOs(String skillOs) {
		this.skillOs = skillOs;
	}
	public String getSkillLang() {
		return skillLang;
	}
	public void setSkillLang(String skillLang) {
		this.skillLang = skillLang;
	}
	public String getSkillDbms() {
		return skillDbms;
	}
	public void setSkillDbms(String skillDbms) {
		this.skillDbms = skillDbms;
	}
	public String getSkillComm() {
		return skillComm;
	}
	public void setSkillComm(String skillComm) {
		this.skillComm = skillComm;
	}
	public String getSkillTool() {
		return skillTool;
	}
	public void setSkillTool(String skillTool) {
		this.skillTool = skillTool;
	}
	public String getSkillEtc() {
		return skillEtc;
	}
	public void setSkillEtc(String skillEtc) {
		this.skillEtc = skillEtc;
	}
	public List<UserInfoSkillVo> getSkillList() {
		return skillList;
	}
	public void setSkillList(List<UserInfoSkillVo> skillList) {
		this.skillList = skillList;
	}
	
}
