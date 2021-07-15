const jobFailures = {
  PBFN16KDU: {
    failureStep: `UPDATE
        TSCSD
    FROM
        DBFNDT.TSCSD_BMC_SKU_DIM TSCSD,
        STAGEFNDT.PROC_OL_BMC_SKU_ATTR_BIGD PROC,
        VIEWCTRLDB.TBRIL_BTCH_RUN_ID_LOOKUP TBRIL
    SET
        WEB_CLR_DESC = PROC.WEB_CLR_DESC ,
        WEB_SKU_DESC = PROC.WEB_SKU_DESC,
        APVL_CD = PROC.APVL_CD,
        DACT_PST_DT = PROC.DACT_PST_DT,
        PRD_PUBL_DT = PROC.PRD_PUBL_DT,
        STY_CLR_PUBL_DT = PROC.STY_CLR_PUBL_DT,
        MCM_LIVE_IND = PROC.MCM_LIVE_IND,
        BI_ETL_BTCH_ID = TBRIL.BI_ETL_BTCH_ID,
        BI_ETL_PROC_TMST = CURRENT_TIMESTAMP(0)
    WHERE
        TSCSD.BRD_SKU_KEY = PROC.BRD_SKU_KEY
        AND TSCSD.MKT_KEY = PROC.MKT_KEY
        AND TSCSD.CHNL_KEY = PROC.CHNL_KEY
        AND UPD_IND = 'Y'
        AND TBRIL.ETL_JOB_NM='PBFN16KU';
     *** Failure 7547 Target row updated by multiple source rows.
                    Statement# 1, Info =0
     *** Total elapsed time was 1 second.`,
    failureSolution:
      "Solution : Failed due to duplicates. Removed the duplicates and restarted the job",
    resolutionSteps: `
        Queries:

        SEL TSCSD.BRD_SKU_KEY,TSCSD.MKT_KEY,TSCSD.CHNL_KEY,count(*)
            FROM
            DBFNDT.TSCSD_BMC_SKU_DIM TSCSD,
            STAGEFNDT.PROC_OL_BMC_SKU_ATTR_BIGD PROC,
            VIEWCTRLDB.TBRIL_BTCH_RUN_ID_LOOKUP TBRIL
            WHERE
            TSCSD.BRD_SKU_KEY = PROC.BRD_SKU_KEY
            AND TSCSD.MKT_KEY = PROC.MKT_KEY
            AND TSCSD.CHNL_KEY = PROC.CHNL_KEY
            AND UPD_IND = 'Y'
            AND TBRIL.ETL_JOB_NM='PBFN16KU' 
            GROUP BY 1,2,3 HAVING COUNT(*) > 1
          

            --to get the rows
            -- to get total no of rows
            SELECT * FROM STAGEFNDT.STG_ONLN_BMC_SKU_ATTR_BIGD 
            WHERE (BRD_SKU_KEY,MKT_KEY,CHNL_KEY) 
            IN 
            (
            SEL TSCSD.BRD_SKU_KEY,TSCSD.MKT_KEY,TSCSD.CHNL_KEY
            FROM
            DBFNDT.TSCSD_BMC_SKU_DIM TSCSD,
            STAGEFNDT.PROC_OL_BMC_SKU_ATTR_BIGD PROC,
            VIEWCTRLDB.TBRIL_BTCH_RUN_ID_LOOKUP TBRIL
            WHERE
            TSCSD.BRD_SKU_KEY = PROC.BRD_SKU_KEY
            AND TSCSD.MKT_KEY = PROC.MKT_KEY
            AND TSCSD.CHNL_KEY = PROC.CHNL_KEY
            AND UPD_IND = 'Y'
            AND TBRIL.ETL_JOB_NM='PBFN16KU' 
            GROUP BY 1,2,3 HAVING COUNT(*) > 1
            );
           


            ---to get the dates..since new dates are added
            SELECT distinct DACT_PST_DT FROM STAGEFNDT.STG_ONLN_BMC_SKU_ATTR_BIGD WHERE (BRD_SKU_KEY,MKT_KEY,CHNL_KEY) IN (
            SEL TSCSD.BRD_SKU_KEY,TSCSD.MKT_KEY,TSCSD.CHNL_KEY
            FROM
            DBFNDT.TSCSD_BMC_SKU_DIM TSCSD,
            STAGEFNDT.PROC_OL_BMC_SKU_ATTR_BIGD PROC,
            VIEWCTRLDB.TBRIL_BTCH_RUN_ID_LOOKUP TBRIL
            WHERE
            TSCSD.BRD_SKU_KEY = PROC.BRD_SKU_KEY
            AND TSCSD.MKT_KEY = PROC.MKT_KEY
            AND TSCSD.CHNL_KEY = PROC.CHNL_KEY
            AND UPD_IND = 'Y'
            AND TBRIL.ETL_JOB_NM='PBFN16KU' GROUP BY 1,2,3 HAVING COUNT(*) > 1);

       

            SELECT * FROM STAGEFNDT.STG_ONLN_BMC_SKU_ATTR_BIGD WHERE (BRD_SKU_KEY,MKT_KEY,CHNL_KEY) IN (
            SEL TSCSD.BRD_SKU_KEY,TSCSD.MKT_KEY,TSCSD.CHNL_KEY
            FROM
            DBFNDT.TSCSD_BMC_SKU_DIM TSCSD,
            STAGEFNDT.PROC_OL_BMC_SKU_ATTR_BIGD PROC,
            VIEWCTRLDB.TBRIL_BTCH_RUN_ID_LOOKUP TBRIL
            WHERE
            TSCSD.BRD_SKU_KEY = PROC.BRD_SKU_KEY
            AND TSCSD.MKT_KEY = PROC.MKT_KEY
            AND TSCSD.CHNL_KEY = PROC.CHNL_KEY
            AND UPD_IND = 'Y'
            AND TBRIL.ETL_JOB_NM='PBFN16KU' GROUP BY 1,2,3 HAVING COUNT(*) > 1) AND 
            DACT_PST_DT in ('4000-12-31','2019-08-07','2011-04-11','2019-08-06','2019-08-05');
            


            CREATE TABLE BACKUP.STG_ONLN_BMC_SKU_ATTR_BIGD_07092021 AS STAGEFNDT.STG_ONLN_BMC_SKU_ATTR_BIGD WITH NO DATA AND STATS;


            INSERT INTO BACKUP.STG_ONLN_BMC_SKU_ATTR_BIGD_07092021
            SELECT * FROM STAGEFNDT.STG_ONLN_BMC_SKU_ATTR_BIGD WHERE (BRD_SKU_KEY,MKT_KEY,CHNL_KEY) IN (
            SEL TSCSD.BRD_SKU_KEY,TSCSD.MKT_KEY,TSCSD.CHNL_KEY
            FROM
            DBFNDT.TSCSD_BMC_SKU_DIM TSCSD,
            STAGEFNDT.PROC_OL_BMC_SKU_ATTR_BIGD PROC,
            VIEWCTRLDB.TBRIL_BTCH_RUN_ID_LOOKUP TBRIL
            WHERE
            TSCSD.BRD_SKU_KEY = PROC.BRD_SKU_KEY
            AND TSCSD.MKT_KEY = PROC.MKT_KEY
            AND TSCSD.CHNL_KEY = PROC.CHNL_KEY
            AND UPD_IND = 'Y'
            AND TBRIL.ETL_JOB_NM='PBFN16KU' GROUP BY 1,2,3 HAVING COUNT(*) > 1) AND  
            DACT_PST_DT  in ('4000-12-31','2019-08-07','2011-04-11','2019-08-06','2019-08-05');
            



            SEL COUNT(*) FROM BACKUP.STG_ONLN_BMC_SKU_ATTR_BIGD_07092021;
       



            DEL FROM STAGEFNDT.STG_ONLN_BMC_SKU_ATTR_BIGD WHERE (BRD_SKU_KEY,MKT_KEY,CHNL_KEY) IN (
            SEL TSCSD.BRD_SKU_KEY,TSCSD.MKT_KEY,TSCSD.CHNL_KEY
            FROM
            DBFNDT.TSCSD_BMC_SKU_DIM TSCSD,
            STAGEFNDT.PROC_OL_BMC_SKU_ATTR_BIGD PROC,
            VIEWCTRLDB.TBRIL_BTCH_RUN_ID_LOOKUP TBRIL
            WHERE
            TSCSD.BRD_SKU_KEY = PROC.BRD_SKU_KEY
            AND TSCSD.MKT_KEY = PROC.MKT_KEY
            AND TSCSD.CHNL_KEY = PROC.CHNL_KEY
            AND UPD_IND = 'Y'
            AND TBRIL.ETL_JOB_NM='PBFN16KU' GROUP BY 1,2,3 HAVING COUNT(*) > 1) AND  
            DACT_PST_DT  in ('4000-12-31','2019-08-07','2011-04-11','2019-08-06','2019-08-05');  c
        `,
    fullLog: `
      *****************************************************************
** Input Table(s):  STAGEFNDT.STG_ONLN_BMC_SKU_ATTR_BIGD
** Target Table(s): DBFNDT.TSCSD_BMC_SKU_DIM
*****************************************************************
Job Started at :2021-07-06 20:00:18
BTEQ 15.10.01.12 Tue Jul  6 20:00:18 2021 PID: 51053106
 
+---------+---------+---------+---------+---------+---------+---------+----

/************************************************/
/*           LOGON COMMAND                      */
/************************************************/
.RUN FILE=/home/apps/td/tqb/.tdlogon_bcrgap_47252296_06072021_200017
+---------+---------+---------+---------+---------+---------+---------+----
.LOGMECH LDAP;
+---------+---------+---------+---------+---------+---------+---------+----
.LOGON TDPROD/E_BSR_FNDT_UTIL_AZ,

 *** Logon successfully completed.
 *** Teradata Database Release is 15.10.07.15                   
 *** Teradata Database Version is 15.10.07.15                     
 *** Transaction Semantics are BTET.
 *** Session Character Set Name is 'ASCII'.
 
 *** Total elapsed time was 1 second.
 
+---------+---------+---------+---------+---------+---------+---------+----

SET QUERY_BAND = 'SCRIPT=bfn/source/PBFN16KU.ksh prd;' FOR SESSION;

 *** Set QUERY_BAND accepted. 
 *** Total elapsed time was 1 second.


+---------+---------+---------+---------+---------+---------+---------+----
 *** Encountered EOF on RUN file. Returning to stdin.
+---------+---------+---------+---------+---------+---------+---------+----
.SET WIDTH 10000;
+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-
.SET RETRY OFF;
+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-
 SELECT SESSION;

 *** Query completed. One row found. One column returned. 
 *** Total elapsed time was 1 second.

    Session
-----------
   16365899

+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-

/************************************************/
/*           CHECKING FOR RESTART               */
/************************************************/
 SELECT * FROM VIEWCTRLDB.TBRIL_BTCH_RUN_ID_LOOKUP
 WHERE ETL_JOB_NM='PBFN16KU';

 *** Query completed. No rows found. 
 *** Total elapsed time was 1 second.


+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-
 
.IF ACTIVITYCOUNT>0 THEN .GOTO SKIP_INITIALIZE
+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-
.IF ERRORCODE <> 0 THEN .QUIT 99
+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-

 INSERT
 INTO VIEWCTRLDB.TBRIL_BTCH_RUN_ID_LOOKUP
 (ETL_JOB_NM
 ,ETL_BTCH_RUN_ID
 ,BI_ETL_BTCH_ID)
 SELECT 'PBFN16KU',A.ETL_BTCH_RUN_ID,B.BI_ETL_BTCH_ID
 FROM
 (SELECT COALESCE(MAX(ETL_BTCH_RUN_ID),0)+1
 FROM VIEWCTRLDB.TEBHW_ETL_BTCH_HIST_FCT
 WHERE ETL_TGT_TBL_NM='TSCSD_BMC_SKU_DIM') A(ETL_BTCH_RUN_ID)
 ,VIEWCTRLDB.TEBIL_ETL_BTCH_ID_LOOKUP B
 WHERE B.CUR_IND='Y' AND B.APPL_ID = 'BFN'
 GROUP BY 1,3;

 *** Insert completed. One row added. 
 *** Total elapsed time was 2 seconds.


+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-
 
.IF ERRORCODE <> 0 THEN .QUIT 99
+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-

/**************************/
.LABEL SKIP_INITIALIZE
+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-
/**************************/

/************************************************/
/*   CHECKING FOR STEP# TO RESTART FROM         */
/************************************************/

 SELECT * FROM VIEWCTRLDB.TEBHW_ETL_BTCH_HIST_FCT   TEBHW
 ,VIEWCTRLDB.TBRIL_BTCH_RUN_ID_LOOKUP  TBRIL
 WHERE TEBHW.ETL_BTCH_RUN_ID=TBRIL.ETL_BTCH_RUN_ID
 AND TEBHW.ETL_JOB_NM = TBRIL.ETL_JOB_NM
 AND TEBHW.ETL_JOB_NM='PBFN16KU'
 AND TEBHW.STP_NBR=1                     --------------STEP # 1
 AND TEBHW.STP_RTN_CD<>0               -------------- UNSUCCESSFUL RUN
 ;

 *** Query completed. No rows found. 
 *** Total elapsed time was 1 second.


+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-

.IF ACTIVITYCOUNT>0 THEN .GOTO STEP_1
+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-
.IF ERRORCODE <> 0 THEN .QUIT 99
+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-


/*****************************************/
/* Writing the Restart Record for Step 1 */
/*****************************************/

 INSERT INTO VIEWCTRLDB.TEBHW_ETL_BTCH_HIST_FCT
 (ETL_BTCH_RUN_ID
 ,STP_NBR
 ,ETL_TGT_TBL_NM
 ,ETL_JOB_NM
 ,ETL_STRT_TMST
 ,ETL_END_TMST
 ,STP_RTN_CD
 ,STP_TXT
 ,BI_ETL_BTCH_ID)
 SELECT A.ETL_BTCH_RUN_ID,1,'TSCSD_BMC_SKU_DIM','PBFN16KU',CURRENT_TIMESTAMP(0),TIMESTAMP '2099-12-31 00:00:00','-1','Running',A.BI_ETL_BTCH_ID
 FROM
 VIEWCTRLDB.TBRIL_BTCH_RUN_ID_LOOKUP A
 WHERE A.ETL_JOB_NM='PBFN16KU';

 *** Insert completed. One row added. 
 *** Total elapsed time was 1 second.


+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-
 
.IF ERRORCODE <> 0 THEN .QUIT 99
+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-

/**************************/
.LABEL STEP_1
+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-
/**************************/

COLLECT STATS ON STAGEFNDT.STG_ONLN_BMC_SKU_ATTR_BIGD ;

 *** Update completed. 2 rows changed. 
 *** Total elapsed time was 2 seconds.


+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-
.IF ERRORCODE <> 0 THEN .QUIT 99
+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-

DELETE FROM STAGEFNDT.PROC_OL_BMC_SKU_ATTR_BIGD ;

 *** Delete completed. 17449381 rows removed. 
 *** Total elapsed time was 1 second.


+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-
.IF ERRORCODE <> 0 THEN .QUIT 99
+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-
 
INSERT INTO STAGEFNDT.PROC_OL_BMC_SKU_ATTR_BIGD
(
    BRD_SKU_KEY,
    MKT_KEY,
    CHNL_KEY,
    WEB_CLR_DESC,
    WEB_SKU_DESC,
    APVL_CD,
    DACT_PST_DT,
    PRD_PUBL_DT,
    STY_CLR_PUBL_DT,
    MCM_LIVE_IND,
    UPD_IND
)
SELECT 
    STG.BRD_SKU_KEY,
    STG.MKT_KEY,
    STG.CHNL_KEY,
    STG.WEB_CLR_DESC,
    STG.WEB_PRD_NM AS WEB_SKU_DESC,
    STG.APV_IND AS APVL_CD,
    STG.DACT_PST_DT,
    STG.PUBL_PST_DT AS PRD_PUBL_DT,
    STG.PUBL_PST_DT_STYL_CLR AS STY_CLR_PUBL_DT,
    STG.MCM_LIVE_IND,
    (CASE 
        WHEN STG.WEB_CLR_DESC <> COALESCE(TSCSD.WEB_CLR_DESC,'NA') THEN 'Y'
        WHEN STG.WEB_PRD_NM <> COALESCE(TSCSD.WEB_SKU_DESC,'NA') THEN 'Y'
        WHEN STG.APV_IND <> COALESCE(TSCSD.APVL_CD,'NA') THEN 'Y'
        WHEN STG.DACT_PST_DT <> COALESCE(TSCSD.DACT_PST_DT,CAST (11-11-1111 AS DATE) ) THEN 'Y'
        WHEN STG.PUBL_PST_DT <> COALESCE(TSCSD.PRD_PUBL_DT,CAST (11-11-1111 AS DATE) ) THEN 'Y'
        WHEN STG.PUBL_PST_DT_STYL_CLR <> COALESCE(TSCSD.STY_CLR_PUBL_DT,CAST (11-11-1111 AS DATE) ) THEN 'Y'
        WHEN STG.MCM_LIVE_IND <> COALESCE(TSCSD.MCM_LIVE_IND,'X') THEN 'Y'
        ELSE 'N'
    END ) AS UPD_IND 
FROM  
    STAGEFNDT.STG_ONLN_BMC_SKU_ATTR_BIGD STG
JOIN  
    DBFNDT.TSCSD_BMC_SKU_DIM TSCSD
ON  STG.BRD_SKU_KEY = TSCSD.BRD_SKU_KEY
    AND STG.MKT_KEY = TSCSD.MKT_KEY
    AND STG.CHNL_KEY = TSCSD.CHNL_KEY  ;

 *** Insert completed. 17475065 rows added. 
 *** Total elapsed time was 4 seconds.


+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-

.IF ERRORCODE <> 0 THEN .QUIT 99
+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-

COLLECT STATS ON STAGEFNDT.PROC_OL_BMC_SKU_ATTR_BIGD ;

 *** Update completed. 2 rows changed. 
 *** Total elapsed time was 2 seconds.


+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-
.IF ERRORCODE <> 0 THEN .QUIT 99
+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-

UPDATE 
    TSCSD
FROM 
    DBFNDT.TSCSD_BMC_SKU_DIM TSCSD,
    STAGEFNDT.PROC_OL_BMC_SKU_ATTR_BIGD PROC,
    VIEWCTRLDB.TBRIL_BTCH_RUN_ID_LOOKUP TBRIL
SET 
    WEB_CLR_DESC = PROC.WEB_CLR_DESC ,
    WEB_SKU_DESC = PROC.WEB_SKU_DESC,
    APVL_CD = PROC.APVL_CD,
    DACT_PST_DT = PROC.DACT_PST_DT,
    PRD_PUBL_DT = PROC.PRD_PUBL_DT,
    STY_CLR_PUBL_DT = PROC.STY_CLR_PUBL_DT,
    MCM_LIVE_IND = PROC.MCM_LIVE_IND,
    BI_ETL_BTCH_ID = TBRIL.BI_ETL_BTCH_ID,
    BI_ETL_PROC_TMST = CURRENT_TIMESTAMP(0)
WHERE 
    TSCSD.BRD_SKU_KEY = PROC.BRD_SKU_KEY
    AND TSCSD.MKT_KEY = PROC.MKT_KEY
    AND TSCSD.CHNL_KEY = PROC.CHNL_KEY 
    AND UPD_IND = 'Y' 
    AND TBRIL.ETL_JOB_NM='PBFN16KU';
 *** Failure 7547 Target row updated by multiple source rows.
                Statement# 1, Info =0 
 *** Total elapsed time was 2 seconds.


+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+---------+-
 
.IF ERRORCODE <> 0 THEN .QUIT 99
.QUIT 99
 *** You are now logged off from the DBC.
 *** Exiting BTEQ...
 *** RC (return code) = 99 
Job Finished at :2021-07-06 20:00:32

      `,
  },
};

export default jobFailures;
