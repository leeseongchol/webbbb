package com.yedam.common;



import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;

public class AppTest {
//테스트용
	public static void main(String[] args) {
		BoardService svc = new BoardServiceImpl();
		SearchVO search =new SearchVO();
		search.setSearchCondition("TW");
		search.setKeyword("java");
		search.setPage(1);
		svc.boardList(search).forEach(System.out::println);
		System.out.println(" - end -");
	}
}
