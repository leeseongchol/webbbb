-- 페이징. 출력되는 데이터가 많으면 한 페이지에 5개씩 여러 페이지에 나눠서 보여주기.
-- 1)페이지당 5건씩 가져오는 쿼리.
-- 2) 전체건수 / 5건 => 전체 페이지를 계산.
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
                    title LIKE '%웹%'
                                       
                    OR writer LIKE '%웹%'
                                           
                ORDER BY
                    board_no
            ) a
    ) b
WHERE
        b.rn > ( 1 - 1 ) * 5
    AND b.rn <= ( 1 * 5 );


     
     
     