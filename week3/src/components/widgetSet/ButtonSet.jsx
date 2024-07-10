import Button from '@/components/common/button/Button';
import * as Styled from '@/components/widgetSet/CommonLayout';
import BellIcon from '@/assets/bell.svg';
import NextIcon from '@/assets/next.svg';

export default function ButtonSet() {
  const handleMakeBtn = () => {
    alert('Make Button');
  };

  const handleAskAnswer = () => {
    prompt('Is it hart?');
  };

  return (
    <Styled.SectionLayout>
      <h2>Button</h2>
      <Styled.LayoutContainer>
        <div className="BtnRow">
          <Button
            size="large"
            border="border"
            icon={NextIcon}
            onClick={handleMakeBtn}
          >
            Large Negative Button
          </Button>
          <Button size="medium">Medium</Button>
          <Button size="small">Small</Button>
        </div>

        <div className="BtnRow">
          <Button
            size="large"
            border="border"
            color="negative"
            icon={BellIcon}
            onClick={handleAskAnswer}
          >
            Large Negative Button
          </Button>
          <Button size="medium" color="negative">
            Medium
          </Button>
          <Button size="small" color="negative">
            Small
          </Button>
        </div>
      </Styled.LayoutContainer>
    </Styled.SectionLayout>
  );
}
