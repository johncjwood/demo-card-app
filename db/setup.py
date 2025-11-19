#!/usr/bin/env python3
import os
import sys
import psycopg2
from pathlib import Path

def main():
    try:
        conn = psycopg2.connect(
            host=os.environ['DB_HOST'],
            database=os.environ['DB_NAME'],
            user=os.environ['DB_USER'],
            password=os.environ['DB_PASSWORD']
        )
        
        sql_files = sorted([f for f in Path('.').glob('*.sql')])
        
        with conn.cursor() as cur:
            for sql_file in sql_files:
                print(f"Executing {sql_file}")
                cur.execute(sql_file.read_text())
                conn.commit()
        
        print("Database setup completed successfully")
        
    except Exception as e:
        print(f"Database setup failed: {e}")
        sys.exit(1)
    finally:
        if 'conn' in locals():
            conn.close()

if __name__ == "__main__":
    main()