# Backend stage
FROM python:3.11-slim
WORKDIR /app
COPY app.py .
RUN pip install flask
VOLUME ["/data"]
EXPOSE 5000
CMD ["python", "app.py"]