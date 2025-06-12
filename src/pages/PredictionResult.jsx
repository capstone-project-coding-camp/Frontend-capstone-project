import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import '../styles/PredictionResult.css';
import 'react-circular-progressbar/dist/styles.css';

const PredictionResult = () => {
  const { babyId } = useParams();
  const location = useLocation();
  const [babyData, setBabyData] = useState(location.state?.babyData || null);

  // Jika data tidak ada di state, fetch dari API
  useEffect(() => {
    if (!babyData) {
      const fetchBabyData = async () => {
        const response = await axios.get(`/api/auth/babies/${babyId}`);
        setBabyData(response.data);
      };
      fetchBabyData();
    }
  }, [babyId, babyData]);

  // Map immunization status to display text
  const immunizationStatusMap = {
    'complete': 'Imunisasi lengkap',
    'incomplete': 'Imunisasi tidak lengkap',
    'not_started': 'Belum imunisasi'
  };

  return (
    <div className="prediction-page">
      <Navbar hideAuthButton={true} />
      
      {/* Blue Header Section with Card Overlapping */}
      <div className="blue-header-section">
        <div className="blue-header">
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={10}>
                <h1>Hasil Prediksi Risiko Gizi Buruk Balita</h1>
                <p className="header-description">
                  Prediksi ini didasarkan pada data balita yang Anda masukkan sebelumnya. Hasil ini dapat membantu
                  Anda memahami kondisi gizi anak dan langkah tindak lanjut yang disarankan.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="data-card-overlap">
                <Card.Body className="p-4">
                  <h2 className="card-title">Data Balita</h2>
                  
                  <Form>
                    {[
                      { label: 'Nama Balita', value: babyData.name },
                      { label: 'Berat Badan', value: `${babyData.weight} kg` },
                      { label: 'Tinggi Badan', value: `${babyData.height} cm` },
                      { label: 'Usia Kehamilan Saat Lahir', value: `${babyData.gestational_age} minggu` },
                      { label: 'Status Imunisasi', value: immunizationStatusMap[babyData.immunization_status] || babyData.immunization_status },
                      // { label: 'Status Ekonomi Keluarga', value: babyData.economic_status }
                    ].map((item, index) => (
                      <Form.Group as={Row} className="mb-3 align-items-center" key={index}>
                        <Form.Label column sm={4} className="fw-bold ps-4 text-start">
                          {item.label}
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control 
                            plaintext 
                            readOnly 
                            defaultValue={item.value} 
                            className="data-value-field"
                          />
                        </Col>
                      </Form.Group>
                    ))}
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Rest of your component remains the same */}
      {/* Status Gizi Section */}
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
              <div className="p-4">
                <h2 className="section-title">Status Gizi Balita</h2>
                
                <div className="nutrition-status-content">
                  {/* Progress Circle */}
                  <div className="progress-circle-container">
                    <div className="progress-circle risk-normal">
                      <div className="circle-progress" style={{ '--progress': '75' }}></div>
                      <div className="circle-inner">
                        <div className="circle-percentage">75%</div>
                        <div className="circle-label">Resiko Normal</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Description */}
                </div>
                <div className="status-description">
                  <h3 className="status-title">Resiko Normal</h3>
                  <div className="divider"></div>
                  <p className="status-text">
                    Status Gizi Pada Balita Berstatus Normal, Tetapi Memerlukan peningkatan lebih lanjut
                  </p>
                </div>
              </div>
          </Col>
        </Row>
      </Container>

      {/* Recommendation Section */}
        <Container className="mt-4 mb-5">
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="recommendation-card">
                <Card.Body className="p-4">
                  <h2 className="recommendation-title">Rekomendasi</h2>
                  
                  <div className="recommendation-boxes">
                    <div className="recommendation-box bg-blue">
                      Cek ulang asupan gizi harian
                    </div>
                    <div className="recommendation-box bg-blue">
                      Rutin timbang dan ukur tinggi anak setiap bulan
                    </div>
                    <div className="recommendation-box bg-blue">
                      Lengkapi imunisasi dasar
                    </div>
                    <div className="recommendation-box bg-blue">
                      Konsultasikan ke puskesmas jika risiko sedang/tinggi
                    </div>
                  </div>
                  
                  <div className="action-buttons mt-4">
                    <button className="btn-gradient-blue">Cek Kembali</button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        {/* Nutrition Knowledge Section */}
        <Container className="mt-4 mb-5">
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="knowledge-main-card bg-blue">
                <Card.Body className="p-4">
                  <Row>
                    <Col md={6} className="knowledge-column">
                      <h3 className="knowledge-title">Kenali Tanda Gizi Buruk</h3>
                      <p className="knowledge-text">
                        Pelajari gejala awal seperti berat badan tidak naik, anak sering sakit, dan perubahan perilaku.
                      </p>
                    </Col>
                    <Col md={6} className="knowledge-column">
                      <h3 className="knowledge-title">Cara Mencegah Gizi Buruk</h3>
                      <p className="knowledge-text">
                        Langkah-langkah pencegahan seperti pemberian MPASI bergizi, penimbangan rutin, dan kebersihan makanan.
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      <Footer />
    </div>
  );
};

export default PredictionResult;