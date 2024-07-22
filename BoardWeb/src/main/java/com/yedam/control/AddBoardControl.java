package com.yedam.control;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;
import com.yedam.common.Control;
import com.yedam.service.BoardService;
import com.yedam.service.BoardServiceImpl;
import com.yedam.vo.BoardVO;

public class AddBoardControl implements Control {

	@Override
	public void exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		//key =value 처리위한 application/x-www-formurlencode 방식
		String writer = req.getParameter("writer");
		String content = req.getParameter("content");
		String title = req.getParameter("title");
		// 파일전송 multipart/form-data 방식. cos라이브러리.
		//1.파일업로드 (images) 2.db입력. 
		String savePath = req.getServletContext().getRealPath("images");
		int maxSize = 1024*1024*5;
		MultipartRequest request = new MultipartRequest(
				   req//1.요청정보
            , savePath// 2.업로드 경로
			, maxSize// 3.최대크기지정
			, "utf-8"//4.파일명 해석 인코딩방식지정.
			, new DefaultFileRenamePolicy() //5. 리네임정책.
				); 
		writer = request.getParameter("writer");
		content = request.getParameter("content");
		title = request.getParameter("title");
		String image = request.getFilesystemName("img");
		
		
		
		BoardVO bobo = new BoardVO();
		bobo.setWriter(writer);
		bobo.setContent(content);
		bobo.setTitle(title);
		bobo.setImage(image);

		BoardService svc = new BoardServiceImpl();
		if (svc.addBoard(bobo)) {
			// 목록이동.
			resp.sendRedirect("boardList.do");
		}

	}

}
