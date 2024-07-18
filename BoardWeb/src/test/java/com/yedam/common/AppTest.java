package com.yedam.common;



import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;

public class AppTest {
//테스트용
	public static void main(String[] args) {
		BoardService svc = new BoardServiceImpl();
		svc.boardList().forEach(System.out::println);
		System.out.println(" - end -");
	}
}
