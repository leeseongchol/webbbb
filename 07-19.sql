-- ����¡. ��µǴ� �����Ͱ� ������ �� �������� 5���� ���� �������� ������ �����ֱ�.
-- 1)�������� 5�Ǿ� �������� ����.
-- 2) ��ü�Ǽ� / 5�� => ��ü �������� ���.
-- 3) 


insert into tbl_board (board_no,writer, title, content)
select board_seq.nextval, writer, title, content
from tbl_board;


select *
from tbl_board;

select b.*
from(select rownum rn, a.*
     from(select *
          from tbl_board
          --where title like '%test%'
          --where writer like '%chacha%'
          where title like '%test%' or writer like '%chacha%'
          order by board_no) a ) b
 where b.rn >(:page - 1)    
and    b.rn <= (:page * 5);

select *
from tbl_board b 
where title like '%java%';

select *
from tbl_board b 
where writer like '%chacha%';

select *
from tbl_board b
where writer like '%test%'
or title like '%java%';



SELECT
    b.*
FROM
    (
        SELECT
            ROWNUM rn,
            a.*
        FROM
            (
                SELECT
                    *
                FROM
                    tbl_board
             --where title like '%test%'
             --where writer like '%test%'
                WHERE
                    title LIKE '%test%'
                    OR writer LIKE '%test%'
                ORDER BY
                    board_no
            ) a
    ) b
WHERE
        b.rn > ( :page - 1 ) * 5
    AND b.rn <= ( :page * 5 );

SELECT
    b.*
FROM
    (
        SELECT
            ROWNUM rn,
            a.*
        FROM
            (
                SELECT
                    *
                FROM
                    tbl_board
                WHERE
                    title LIKE '%��%'
                                       
                    OR writer LIKE '%��%'
                                           
                ORDER BY
                    board_no
            ) a
    ) b
WHERE
        b.rn > ( 1 - 1 ) * 5
    AND b.rn <= ( 1 * 5 );


     
     
     