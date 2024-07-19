package com.yedam.common;

import lombok.Data;

@Data
public class PageDTO {
	private int page; // 현재페이지
	private int startPage, endPage; // 1 2 3 4 5 6 7 8 >>
	private boolean prev, next;

	public PageDTO(int page, int totalCnt) {
		//page:13, totalCnt: 88 (18page)
		this.page = page;
		this.endPage = (int) (Math.ceil(page / 10.0) * 10); // 2*10
		this.startPage = this.endPage - 9;
		
		int realEnd = (int)Math.ceil(totalCnt /5.0); //실제 건수 계산한 마지막 페이지
		this.endPage = this.endPage > realEnd ? realEnd : endPage;
		
		this.prev = this.startPage > 1;
		this.next = this.endPage < realEnd;
	}
}
