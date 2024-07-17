package com.yedam.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;

import com.yedam.common.DataSource;
import com.yedam.mapper.StudentMapper;
import com.yedam.vo.StudentVO;



@WebServlet("/studentAddServ")
public class studentAddServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
    public studentAddServ() {
        super();
      
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		// sno=S2024-12&sname=이성철&sphone=010-5124-6677&sbirth=1993-03-30
		String sno = request.getParameter("sno");
		String sname = request.getParameter("sname");
		String sphone = request.getParameter("sphone");
		String sbirth = request.getParameter("sbirth");
		StudentVO svo = new StudentVO();
		svo.setStdNo(sno);
		svo.setStdName(sname);
		svo.setStdPhone(sphone);
		svo.setBirthDate(sbirth);
		
		 SqlSession sqlSession = DataSource.getInstance().openSession(true);
		 StudentMapper mapper = sqlSession.getMapper(StudentMapper.class);
		 
		 mapper.insertStudent(svo);
		 
		 response.sendRedirect("SampleServlet");
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
