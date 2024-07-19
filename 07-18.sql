-- 게시판(게시글번호, 제목, 내용, 작성자, 작성일시, 조회수)
create table tbl_board (
 board_no number,
 title varchar2(100) not null,
 content varchar2(500)not null,
 writer varchar2(100) not null,
 writer_date date default sysdate,
 view_cnt number default 0
);

create sequence board_seq;

alter table tbl_board add constraint board_pk primary key(board_no);

--user01 웹은 재밌습니다. / html, jsp공부하고 좋습니다. 
insert into tbl_board (board_no,writer, title, content)
values(board_seq.nextval, 'user01', '웹은 재밌습니다.','jsp공부하고 좋습니다');

insert into tbl_board (board_no,writer, title, content)
values(board_seq.nextval, 'chacha', 'java도 잼따.','jsp도 좋습니다.');

insert into tbl_board (board_no,writer, title, content)
values(board_seq.nextval, 'hahahaha', 'java재미없노.','jsp 겁나 재미없음');

insert into tbl_board (board_no,writer, title, content)
values(board_seq.nextval, 'genius', 'java쉽다.','jsp 겁나 쉬워잉');

select *
from tbl_board;

commit;