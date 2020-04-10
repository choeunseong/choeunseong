package CardController;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.topia.topia.HomeController;

import UserVo.UserInfoCareerVo;
import UserVo.UserInfoEduVo;
import UserVo.UserInfoLicenVo;
import UserVo.UserInfoQualifiVo;
import UserVo.UserInfoSkillVo;
import UserVo.UserInfoTrainingVo;
import UserVo.UserInfoVo;
import paging.PageVo;

@Controller
public class CardController {
	
	@Autowired
	CardService cardService;
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping(value = "/card/cardInput.do", method = RequestMethod.GET)
	public String cardInput(Model model) {
		model.addAttribute("status", "new");
		
		return "main";
	}
	
	// 불러오기 조회
	@RequestMapping(value = "/personalHistory/getHistoryInfo.do", method = RequestMethod.POST)
	public ModelAndView getHistoryInfo(Locale locale, UserInfoVo userInfo, @RequestParam(defaultValue="1") int pageNo) { 
		ModelAndView mv = new ModelAndView();
//		System.out.println(userInfo.getUserGender());
		int infoCnt = cardService.getHistoryInfoCnt(userInfo);
		
		PageVo pVo = new PageVo(infoCnt, pageNo, userInfo.getUserInfoDataSize());
		
//		userInfo.setPageNo(pVo.getPageNo());	// pageVo의 pageNo를 boardVo의 pagaNo에 담아줌.
		userInfo.setStartIndex(pVo.getStartIndex());
		userInfo.setEndIndex(pVo.getEndIndex());
		
		List<UserInfoVo> list = cardService.getHistoryInfo(userInfo);
		
		
		mv.addObject("list", list);
		mv.addObject("page", pVo);
		mv.addObject("infoCnt", infoCnt);
		mv.addObject("historyGubun", "history");
		mv.setViewName("history/historyList");
		
		return mv;
	}
	
	// 연차별 인원보기
	@RequestMapping(value = "/personalHistory/getGroupInfo.do", method = RequestMethod.POST)
	public ModelAndView getGroupInfo(Locale locale) { 
		ModelAndView mv = new ModelAndView();
		
		List<UserInfoVo> careerGrouplist = cardService.getGroupInfo();
		
		mv.addObject("careerGrouplist", careerGrouplist);
		mv.setViewName("history/groupInfo");
		
		return mv;
	}
	
	// 연차별 인원정보 상세보기
	@RequestMapping(value = "/personalHistory/getSkillCareerInfo.do", method = RequestMethod.POST)
	public ModelAndView getSkillCareerInfo(Locale locale, UserInfoVo userVo, @RequestParam(defaultValue="1") int pageNo) { 
		ModelAndView mv = new ModelAndView();
		
		int skillCareerCnt = cardService.getSkillCareerCnt(userVo);	// 연차별 인원정보 상세보기 cnt
//System.out.println(pageNo);
		PageVo pVo = new PageVo(skillCareerCnt, pageNo, 10);
		
//		userInfo.setPageNo(pVo.getPageNo());	// pageVo의 pageNo를 boardVo의 pagaNo에 담아줌.
		userVo.setStartIndex(pVo.getStartIndex());
		userVo.setEndIndex(pVo.getEndIndex());
		
		System.out.println("시작 = " + userVo.getStartIndex());
		System.out.println("끝 = " + userVo.getEndIndex());
		
		List<UserInfoVo> list = cardService.getSkillCareerPerson(userVo);

		mv.addObject("list", list);
		mv.addObject("page", pVo);
		mv.addObject("infoCnt", skillCareerCnt);
		mv.addObject("historyGubun", "skillCareer");
		mv.addObject("careerDate", userVo.getCareerDate());
		mv.setViewName("history/historyList");
		
		return mv;
	}
	
	// 개인이력카드 상세정보조회
	@RequestMapping(value = "/personalHistory/getHistoryInfoDetail.do", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> getHistoryInfoDetail(Locale locale, UserInfoVo userInfoVo) { 
		Map<String, Object> map = new HashMap<String, Object>();
		
		UserInfoVo resultVo = cardService.getHistoryInfoDetail(userInfoVo);	// 개인이력카드(기본정보) 상세보기
		List<UserInfoCareerVo> eduList = cardService.getEduDetailList(userInfoVo.getUserIdx()); // 개인이력카드(학력) 상세보기
		List<UserInfoCareerVo> qualifiList = cardService.getQualifiDetailList(userInfoVo.getUserIdx()); // 개인이력카드(자격증) 상세보기
		List<UserInfoCareerVo> careerList = cardService.getCareerDetailList(userInfoVo.getUserIdx()); // 개인이력카드(경력) 상세보기
		List<UserInfoCareerVo> trainingList = cardService.getTrainingDetailList(userInfoVo.getUserIdx()); // 개인이력카드(교육) 상세보기
		List<UserInfoCareerVo> licenList = cardService.getLicenDetailList(userInfoVo.getUserIdx()); // 개인이력카드(외국어능력) 상세보기
		List<UserInfoCareerVo> skillList = cardService.getSkillDetailList(userInfoVo.getUserIdx()); // 개인이력카드(프로젝트경력) 상세보기
		
		map.put("status", "update");
		map.put("userInfo", resultVo);
		map.put("careerList", careerList);
		map.put("eduList", eduList);
		map.put("qualifiList", qualifiList);
		map.put("trainingList", trainingList);
		map.put("licenList", licenList);
		map.put("skillList", skillList);
		
//		mv.addObject("status", "update");
//		mv.addObject("userInfo", resultVo);
//		mv.setViewName("main");
		
		return map;
	}
	
	// 이력카드 기본정보 등록
	@RequestMapping(value = "/personalHistory/cardInsert.do", method = RequestMethod.POST)
	@ResponseBody
	public Map cardInsert(UserInfoVo userVo, UserInfoCareerVo userCareerVo, UserInfoEduVo userEduVo, UserInfoLicenVo userLicenVo
						, UserInfoQualifiVo userQualiVo, UserInfoSkillVo userSkillVo, UserInfoTrainingVo userTrainingVo) {
		
		Map map = new HashMap();
		
		int searchVo = cardService.searchInfo(userVo);
		
		if(searchVo == 0) {
			int resultUserInfo = cardService.infoInsert(userVo, userCareerVo, userEduVo, userLicenVo, userQualiVo, userSkillVo, userTrainingVo);	// 1. 기본정보 insert
			
			if(resultUserInfo == 1) {
				map.put("result", "success");
			}else if(resultUserInfo < 1) {
				map.put("result", "fail");
			}
		}else {
			map.put("result", "already");
		}
		
		return map;
	}
	
	// 이력카드 기본정보 수정
	@RequestMapping(value = "/personalHistory/cardUpdate.do", method = RequestMethod.POST)
	@ResponseBody
	public Map cardUpdate(UserInfoVo userVo, UserInfoCareerVo userCareerVo, UserInfoEduVo userEduVo, UserInfoLicenVo userLicenVo
			, UserInfoQualifiVo userQualiVo, UserInfoSkillVo userSkillVo, UserInfoTrainingVo userTrainingVo) {
		
		Map map = new HashMap();
		System.out.println("controller");
		int resultUserInfo = cardService.cardUpdate(userVo, userCareerVo, userEduVo, userLicenVo, userQualiVo, userSkillVo, userTrainingVo);	// 1. 기본정보 update
		
		if(resultUserInfo == 1) {
			map.put("result", "success");
		}else if(resultUserInfo < 1) {
			map.put("result", "fail");
		}
		
		return map;
	}
	
}
