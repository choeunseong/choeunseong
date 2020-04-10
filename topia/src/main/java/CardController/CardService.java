package CardController;

import java.util.List;

import UserVo.UserInfoCareerVo;
import UserVo.UserInfoEduVo;
import UserVo.UserInfoLicenVo;
import UserVo.UserInfoQualifiVo;
import UserVo.UserInfoSkillVo;
import UserVo.UserInfoTrainingVo;
import UserVo.UserInfoVo;

public interface CardService {

	List<UserInfoVo> getHistoryInfo(UserInfoVo userInfo);	// 불러오기 리스트
	int getHistoryInfoCnt(UserInfoVo userInfo);	// 불러오기 count

	UserInfoVo getHistoryInfoDetail(UserInfoVo userInfoVo);	// 개인이력카드(기본정보) 상세보기
	List<UserInfoCareerVo> getEduDetailList(int userIdx); // 개인이력카드(학력) 상세보기
	List<UserInfoCareerVo> getQualifiDetailList(int userIdx); // 개인이력카드(자격증) 상세보기
	List<UserInfoCareerVo> getCareerDetailList(int userIdx);	// 개인이력카드(경력) 상세보기 리스트
	List<UserInfoCareerVo> getTrainingDetailList(int userIdx); // 개인이력카드(교육) 상세보기
	List<UserInfoCareerVo> getLicenDetailList(int userIdx); // 개인이력카드(외국어능력) 상세보기
	List<UserInfoCareerVo> getSkillDetailList(int userIdx); // 개인이력카드(프로젝트경력) 상세보기

	int searchInfo(UserInfoVo userVo);	// 등록 전 같은 주민등록번호로 등록되어있는지 확인
	int infoInsert(UserInfoVo userVo, UserInfoCareerVo userCareerVo, UserInfoEduVo userEduVo, UserInfoLicenVo userLicenVo
				  , UserInfoQualifiVo userQualiVo, UserInfoSkillVo userSkillVo, UserInfoTrainingVo userTrainingVo);	// 기본정보 insert
	
	int cardUpdate(UserInfoVo userVo, UserInfoCareerVo userCareerVo, UserInfoEduVo userEduVo, UserInfoLicenVo userLicenVo
				  , UserInfoQualifiVo userQualiVo, UserInfoSkillVo userSkillVo, UserInfoTrainingVo userTrainingVo);	// 기본정보 update
	
	List<UserInfoVo> getGroupInfo();	// 연차별 인원보기
	
	int getSkillCareerCnt(UserInfoVo userVo);	// 연차별 인원정보 상세보기 cnt
	List<UserInfoVo> getSkillCareerPerson(UserInfoVo userVo);	// 연차별 인원정보 상세보기

	
	
	
}
