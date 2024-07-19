-- �Խ���(�Խñ۹�ȣ, ����, ����, �ۼ���, �ۼ��Ͻ�, ��ȸ��)
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

--user01 ���� ��ս��ϴ�. / html, jsp�����ϰ� �����ϴ�. 
insert into tbl_board (board_no,writer, title, content)
values(board_seq.nextval, 'user01', '���� ��ս��ϴ�.','jsp�����ϰ� �����ϴ�');

insert into tbl_board (board_no,writer, title, content)
values(board_seq.nextval, 'chacha', 'java�� ���.','jsp�� �����ϴ�.');

insert into tbl_board (board_no,writer, title, content)
values(board_seq.nextval, 'hahahaha', 'java��̾���.','jsp �̳� ��̾���');

insert into tbl_board (board_no,writer, title, content)
values(board_seq.nextval, 'genius', 'java����.','jsp �̳� ������');

select *
from tbl_board;

commit;