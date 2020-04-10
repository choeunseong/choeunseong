package CardController;

import java.util.List;

import UserVo.UserInfoCareerVo;
import UserVo.UserInfoEduVo;
import UserVo.UserInfoLicenVo;
import UserVo.UserInfoQualifiVo;
import UserVo.UserInfoSkillVo;
import UserVo.UserInfoTrainingVo;
import UserVo.UserInfoVo;

public interface CardDao {

	List<UserInfoVo> getHistoryInfo(UserInfoVo userInfo);	// 불러오기 리스트
	int getHistoryInfoCnt(UserInfoVo userInfo);	// 불러오기count

	UserInfoVo getHistoryInfoDetail(UserInfoVo userInfoVo);		// 개인이력카드(기본정보) 상세보기
	List<UserInfoCareerVo> getEduDetailList(int userIdx);		// 개인이력카드(학력) 상세보기
	List<UserInfoCareerVo> getQualifiDetailList(int userIdx);	// 개인이력카드(자격증) 상세보기
	List<UserInfoCareerVo> getCareerDetailList(int userIdx);	// 개인이력카드(경력) 상세보기 리스트
	List<UserInfoCareerVo> getTrainingDetailList(int userIdx);	// 개인이력카드(교육) 상세보기
	List<UserInfoCareerVo> getLicenDetailList(int userIdx);		// 개인이력카드(외국어능력) 상세보기
	List<UserInfoCareerVo> getSkillDetailList(int userIdx);		// 개인이력카드(프로젝트경력) 상세보기
	
	int searchInfo(UserInfoVo userVo);	// 등록 전 같은 주민등록번호로 등록되어있는지 확인
	int infoInsert(UserInfoVo userVo);						// 기본정보 insert
	int careerInsert(UserInfoCareerVo userCareerVo);		// 경력insert
	int eduInsert(UserInfoEduVo userEduVo);					// 학력insert
	int licenInsert(UserInfoLicenVo userLicenVo);			// 언어능력insert
	int qualifiInsert(UserInfoQualifiVo userQualiVo);		// 자격증insert
	int skillInsert(UserInfoSkillVo userSkillVo);			// 프로젝트경력insert
	int trainingInsert(UserInfoTrainingVo userTrainingVo);	// 교육insert
	
	int infoUpdate(UserInfoVo userVo);			// 기본정보 update
//	int careerUpdate(UserInfoCareerVo i);		// 경력 update
//	int eduUpdate(UserInfoEduVo i);				// 학력 update
//	int licenUpdate(UserInfoLicenVo i);			// 보유기술/외국어능력 update
//	int qualifiUpdate(UserInfoQualifiVo i);		// 자격증 update
//	int skillUpdate(UserInfoSkillVo i);			// 프로젝트경력 update
//	int trainingUpdate(UserInfoTrainingVo i);	// 교육 update
	
	void careerDelete(int userIdx);		// 경력 delete
	void eduDelete(int userIdx);		// 학력 delete
	void licenDelete(int userIdx);		// 학력 delete
	void qualifiDelete(int userIdx);	// 자격증 delete
	void skillDelete(int userIdx);		// 프로젝트경력 delete
	void trainingDelete(int userIdx);	// 교육 delete
	
	List<UserInfoVo> getGroupInfo();	// 연차별 인원보기
	int getSkillCareerCnt(UserInfoVo userVo);	// 연차별 인원정보 상세보기 cnt
	List<UserInfoVo> getSkillCareerPerson(UserInfoVo userVo);	// 연차별 인원정보 상세보기
	

	
	
	
}
