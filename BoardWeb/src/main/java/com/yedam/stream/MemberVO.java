package com.yedam.stream;

import java.io.Serializable;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // 기본생성자
@AllArgsConstructor // 생성자를 만들어주는 어노테이션
@NoArgsConstructor
public class MemberVO implements Serializable {
	private int memberNo;
	private String memberName;
	private int point;
	
}
