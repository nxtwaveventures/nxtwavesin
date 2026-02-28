import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'NxtWaves | AI Talent Retention';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to right bottom, #020617, #0f172a, #1e1b4b)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'sans-serif',
                    padding: 80,
                    textAlign: 'center',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
                    {/* Faux generated Blue/Green Logo for OG */}
                    <div
                        style={{
                            width: 140,
                            height: 140,
                            background: 'linear-gradient(to right bottom, #10b981, #3b82f6)',
                            borderRadius: 70,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 40,
                            fontSize: 80,
                            fontWeight: 900,
                        }}
                    >
                        N
                    </div>
                    <div style={{ fontSize: 130, fontWeight: 900, display: 'flex' }}>
                        <span>NXT</span>
                        <span style={{ color: '#10b981' }}>WAVES</span>
                    </div>
                </div>

                <div
                    style={{
                        fontSize: 50,
                        fontWeight: 600,
                        color: 'rgba(255, 255, 255, 0.8)',
                        maxWidth: '900px',
                        lineHeight: 1.4,
                    }}
                >
                    Expert AI Talent. Anti-Contingency Model.
                </div>
            </div>
        ),
        { ...size }
    );
}
